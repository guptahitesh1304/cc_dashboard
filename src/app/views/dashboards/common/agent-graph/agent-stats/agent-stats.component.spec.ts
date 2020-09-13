import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStatsComponent } from './agent-stats.component';

describe('AgentStatsComponent', () => {
  let component: AgentStatsComponent;
  let fixture: ComponentFixture<AgentStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
