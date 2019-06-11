import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "http://localhost:8080/api/v1/googlebooks/graphql";

  constructor(private http: HttpClient) { }

  getAllBooksByTitle(title: string): Observable<any> {
    const body = "{" +
      "booksByTitle(title: \"" + title + "\"" + ") {" +
      "id " +
      "title " +
      "authors" +
      "}}";

    return this.http.post(this.url, body);
  }

  getBookById(id: string): Observable<any> {
    const  body = "{" +
      "book(id: \"" + id + "\") {" +
      "title " +
      "authors " +
      "description " +
      "publisher " +
      "publishedDate " +
      "averageRating " +
      "language " +
      "thumbnail" +
      "}}";

    return this.http.post(this.url, body);
  }
}
