import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCallComponent } from './monthly-call.component';

describe('MonthlyCallComponent', () => {
  let component: MonthlyCallComponent;
  let fixture: ComponentFixture<MonthlyCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
