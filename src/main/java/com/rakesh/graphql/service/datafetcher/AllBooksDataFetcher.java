package com.rakesh.graphql.service.datafetcher;

import com.rakesh.graphql.model.Book;
import com.rakesh.graphql.service.BooksService;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class AllBooksDataFetcher implements DataFetcher<List<Book>> {
    @Autowired
    private BooksService booksService;

    @Override
    public List<Book> get(DataFetchingEnvironment dataFetchingEnvironment) {
        String title = dataFetchingEnvironment.getArgument("title");
        List<Book> bookList;
        log.info("Fetching all google books with title {}", title);
        bookList = booksService.getBooks(title);
        return bookList;
    }
}
