import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../shared/book.service";

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  books: Object;
  isLoading = true;
  color = 'primary';
  mode='indeterminate';
  value=50;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    console.log('Entering all books component');
    this.getAllBooks();
  }

  getAllBooks() {
    const title = this.route.snapshot.params['title'];
    console.log('title is ' + title);
    this.bookService.getAllBooksByTitle(title)
      .subscribe(data => {this.books = data;
      this.isLoading = false;});

  }
}
