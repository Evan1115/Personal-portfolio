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
    'https://raw.githubusercontent.com/Evan1115/resume/main/resume.pdf';

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
