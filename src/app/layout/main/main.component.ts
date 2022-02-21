import { NavbarService } from './../navbar/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  level: number;

  constructor(
    private navbar: NavbarService
  ) { }

  ngOnInit(): void {
    this.getLevel();
  }

  getLevel() {
    this.navbar.getLevel().subscribe(level => {
      this.level = level;
    });
  }

  setLevel(): string {
    return `level-${this.level}`;
  }

}
