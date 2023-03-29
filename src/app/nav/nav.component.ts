import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  toggleNav = false;

  constructor(private router: Router) {}
  resumeURL =
    'https://drive.google.com/file/d/1kd9a26PrdtINKe0v0eExTgbLjhKT-gB9/view?usp=share_link';

  ngOnInit(): void {}


  navigateTo(choice: string): void {
    switch (choice) {
      case 'resume':
        window.open(this.resumeURL, '_blank');
        break;
      default:
        break;
    }
    this.toggle();
  }

  toggle(): void {
    this.toggleNav = !this.toggleNav;
  }
}
