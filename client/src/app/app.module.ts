import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GooglebooksComponent } from './googlebooks/googlebooks.component';
import { BookComponent } from './book/book.component';
import { GooglebookDetailsComponent } from './googlebook-details/googlebook-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import {HttpClientModule} from "@angular/common/http";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, MatProgressSpinnerModule, MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AllbooksComponent } from './allbooks/allbooks.component';
import {BookService} from "./shared/book.service";
import {GooglebookService} from "./shared/googlebook.service";

@NgModule({
  declarations: [
    AppComponent,
    GooglebooksComponent,
    BookComponent,
    GooglebookDetailsComponent,
    BookDetailsComponent,
    AllbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [BookService, GooglebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
