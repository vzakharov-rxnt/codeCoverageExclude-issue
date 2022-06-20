import { ComponentFixture } from '@angular/core/testing';

export class TestUI<T> {
  constructor(private fixture: ComponentFixture<T>) {
  }

  someFunc() {
    console.log('some action');
  }
}
