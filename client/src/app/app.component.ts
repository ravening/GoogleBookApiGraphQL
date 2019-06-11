import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google Books';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Search Book(GraphQL)',
        link: './books',
        index: 0
      }, {
        label: 'Search Google Book',
        link: './googlebooks',
        index: 1
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex =
        this.navLinks.indexOf(this.navLinks.find(
          tab => tab.link === '.' + this.router.url));
    });
  }
}
