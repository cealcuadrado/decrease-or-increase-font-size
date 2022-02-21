import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  level: number = 3;
  subjectLevel = new BehaviorSubject<number>(this.level);

  constructor() {}

  getLevel(): Observable<number> {
    return this.subjectLevel.asObservable();
  }

  decreaseLevel(): void {
    if (this.level - 1 < 1) {
      return;
    } else {
      this.level--;
      this.subjectLevel.next(this.level);
    }
  }

  increaseLevel(): void {
    if (this.level + 1 > 5) {
      return
    } else {
      this.level++;
      this.subjectLevel.next(this.level);
    }
  }

  setLevel(level: number): void {
    this.subjectLevel.next(level);
  }
}
