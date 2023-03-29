import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  link = '';
  constructor() {}

  ngOnInit(): void {}

  redirectToSocialMedia(type: string): void {
    switch (type) {
      case 'linkedIn':
        this.link = "https://www.linkedin.com/in/evan1115/"
        break;
      case 'github':
        this.link = "https://github.com/Evan1115"
        break;
      case 'devTo':
        this.link = "https://dev.to/evan1115"
        break;

      default:
        break;
    }

    window.open(this.link, "_blank");
  }
}
