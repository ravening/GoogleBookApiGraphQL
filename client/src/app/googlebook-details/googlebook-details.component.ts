import { Component, OnInit } from '@angular/core';
import {GooglebookService} from "../shared/googlebook.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-googlebook-details',
  templateUrl: './googlebook-details.component.html',
  styleUrls: ['./googlebook-details.component.css']
})
export class GooglebookDetailsComponent implements OnInit {
  books: Object;
  isLoading=true;
  constructor(private googlebookService: GooglebookService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const title = this.route.snapshot.params['title'];
    this.getBooks(title);
  }

  getBooks(title: string) {
    this.googlebookService.getAllBooks(title)
      .subscribe(data => {this.books = data; console.log(data); this.isLoading = false});
  }

  goBack() {
    this.location.back();
  }
}
