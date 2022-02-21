import { NavbarService } from './navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
  }

  increaseLevel(): void {
    this.navbar.increaseLevel();
  }

  decreaseLevel(): void {
    this.navbar.decreaseLevel();
  }
}
