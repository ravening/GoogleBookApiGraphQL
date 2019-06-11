import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GooglebookService {
  url = "http://localhost:8080/api/v1/googlebooks/name/";
  constructor(private http: HttpClient) { }

  getAllBooks(title: string): Observable<any> {
    return this.http.get(this.url + title);
  }

}
