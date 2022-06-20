import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestUI } from './common/test-ui.mock';
import { MockBuilder } from 'ng-mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let testUI: TestUI<AppComponent>;

  beforeEach(() => {
    return MockBuilder()
      .keep(AppComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    testUI = new TestUI(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
