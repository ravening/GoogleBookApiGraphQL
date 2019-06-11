import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BookComponent} from "./book/book.component";
import {AllbooksComponent} from "./allbooks/allbooks.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {GooglebooksComponent} from "./googlebooks/googlebooks.component";
import {GooglebookDetailsComponent} from "./googlebook-details/googlebook-details.component";

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'allbooks/:title',
    component: AllbooksComponent
  },
  {
    path: 'bookdetails/:id',
    component: BookDetailsComponent
  },
  {
    path: 'googlebooks',
    component: GooglebooksComponent
  },
  {
    path: 'googlebookdetails/:title',
    component: GooglebookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
