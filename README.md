# Google Books using GraphQL

This is a spring boot and Angular 8 application to fetch the books by title 
using the Google Books API service.

There are two ways of fetching the Google Books
```$xslt
1. Using the standard google books api
2. Using the GraphQL service to fetch sub parts of the book
```

In the first part, I use the standard Google books API to fetch all the books

by title provided by user. The JSON response is directly mapped to a

JAVA object. No additional parsing is needed. Once all the books are fetched,

the details are displayed on the UI.

----

###### GraphQL
 In the second part also we use the Google Books API service but instead of mapping
 
 entire JSON response to JAVA object, we use jackson library to parse the JSON
 
 response to create a custom Book object. After that using the GraphQL schema
 
 we return specific details of the book which user has mentioned in the books.graphql file
 
 ----
 The Important GraphQL schema is mentioned as below
 
 ```$xslt
schema {
  query: Query
}

type Query{
    booksByTitle(title: String): [Book]
    book(id: String): Book
}

type Book {
    title: String
    authors: String
}
```

This tells that we are doing "Query" for the "Book" type. There are two types of query here.

One is searching for books using the title which returns a list of book

The next query is searching the book using the id which returns just one Book.

The return data just contains "title" and the "authors" of the book and not all

the details returned by the API

Of course you can include more details of you want under "type Book"

---
On the other hand if you have a set of books already stored in the database or

getting it from another API, service then you can display all of them by mentioning

below schema in the books.graphql file

```
type Query {
    allBooks: [Book]
}
```

Once that is done, you can fetch particular details by using the below content as the body for the POST request
```$xslt
{
 allBooks{
 title
 author
 publisher
 publishedDate
 }
}
```

Also note that you need to define a new DataFetcher endpoint for "allBooks" in

```
GraphQLService.java
```
and provide implementation for that endpoint under the "datafetcher" directory

## Prerequisites
The project assumes that following packages are installed to before using it
```
Java 8, Maven, Angular 8(Important), nodejs, npm
```

## Installation of necessary packages
Install the latest version of nodejs, npm and angular

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
npm i -g @angular/cli@8.0.1
```

## Steps to run the project

1. Clone the git repo to your local directory

2. cd to that directory and run the below command
```bash
./mvnw spring-boot:run
```
This will install all the necessary dependencies for the backend
and starts the application at http://localhost:8080

By default all the fetched books are stored in the h2 database and it can be accessed using

[h2-console](http://localhost:8080/h2-console)

The database details are mentioned in application.properties file

3.Now cd to "client" directory and run
```bash
npm install
```
This will install all the required node packages

4.Start the frontend using
```bash
ng serve
```
Now navigate to the link http://localhost:4200

By default the books will be searched using the GraphQL implementation.


## Additional Info
Below are the commands used to create the frontend project
```bash
ng new client --routing --style css --enable-ivy
ng add @angular/material
ng g s shared/book
ng g s shared/googlebook
ng g c allbooks
ng g c book
ng g c book-details
ng g c googlebooks
ng g c googlebook-details
```