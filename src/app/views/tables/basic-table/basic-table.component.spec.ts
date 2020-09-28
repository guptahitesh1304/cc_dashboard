import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStatsTableComponent } from './basic-table.component';

describe('AgentStatsTableComponent', () => {
  let component: AgentStatsTableComponent;
  let fixture: ComponentFixture<AgentStatsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentStatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
