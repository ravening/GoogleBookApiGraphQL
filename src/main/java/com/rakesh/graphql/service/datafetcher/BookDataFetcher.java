package com.rakesh.graphql.service.datafetcher;

import com.rakesh.graphql.model.Book;
import com.rakesh.graphql.repository.BookRepository;
import com.rakesh.graphql.service.BooksService;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class BookDataFetcher implements DataFetcher<Book> {
    @Autowired
    private BooksService booksService;
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book get(DataFetchingEnvironment dataFetchingEnvironment) {
        // Get the id of the book request body
        String id = dataFetchingEnvironment.getArgument("id");


        List<Book> bookList = bookRepository.findAll();
        Book book = new Book();

        log.info("Searching books with id {}", id);

        book = bookList.stream()
                .filter(x -> x.getId().equalsIgnoreCase(id))
                .findFirst()
                .orElse(null);
        return book;
    }
}
