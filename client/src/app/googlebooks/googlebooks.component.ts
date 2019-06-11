import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GooglebookService} from "../shared/googlebook.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-googlebooks',
  templateUrl: './googlebooks.component.html',
  styleUrls: ['./googlebooks.component.css']
})
export class GooglebooksComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private googleBookService: GooglebookService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    let title = this.bookForm.get('title').value;
    console.log('title is ' + title);
    this.router.navigate(['googlebookdetails', title]);
  }
}
