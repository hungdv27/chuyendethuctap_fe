import { Component, DoCheck } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements DoCheck {
  isCollapsed = false;
  isMenu: boolean = false;
  constructor(private fb: UntypedFormBuilder, private route: Router) {}
  name = localStorage.getItem('name');

  ngDoCheck(): void {
    let currenturl = this.route.url;
    if (currenturl == '/login' || currenturl == '/register') {
      this.isMenu = false;
    } else {
      this.isMenu = true;
    }
  }

  ngOnInit(): void {}
  clickLogin() {
    this.route.navigate(['/login']);
  }
}
