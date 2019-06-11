import { Component, OnInit } from '@angular/core';
import {BookService} from "../shared/book.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Object;
  isLoading=true;
  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getBookById(id);
  }

  getBookById(id: string) {
    this.bookService.getBookById(id)
      .subscribe(data => {this.book = data; console.log(data); this.isLoading = false});
  }

  goBack() {
    this.location.back();
  }
}
