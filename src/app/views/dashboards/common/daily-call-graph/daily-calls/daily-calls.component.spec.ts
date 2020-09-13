import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCallsComponent } from './daily-calls.component';

describe('DailyCallsComponent', () => {
  let component: DailyCallsComponent;
  let fixture: ComponentFixture<DailyCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
