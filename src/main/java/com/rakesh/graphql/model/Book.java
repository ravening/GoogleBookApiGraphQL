package com.rakesh.graphql.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book")
public class Book {
    @Id
    private String id;
    private String title;
    private String authors;
    private String publisher;
    private String publishedDate;
    @Column(length = 1000)
    private String description;
    private int pageCount;
    private String categories;
    private int averageRating;
    private int ratingsCount;
    private String language;
    private String thumbnail;
}
