import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule,  } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { AgentStatsTableComponent } from './tables/basic-table/basic-table.component';
import { ModalsComponent } from './modals/modals.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import { CdrComponent } from './cdr/cdr.component';
import { MonthlyCallComponent } from './dashboards/common/monthly-graph/monthly-call/monthly-call.component';
import { DailyCallsComponent } from './dashboards/common/daily-call-graph/daily-calls/daily-calls.component';
import { AgentStatsComponent } from './dashboards/common/agent-graph/agent-stats/agent-stats.component';
import { QueueStatsComponent } from './dashboards/common/queuewise-stats/queue-stats/queue-stats.component';
import { Part1Component } from './dashboards/common/dashboard-summary/part1/part1.component';
import { Part2Component } from './dashboards/common/dashboard-summary/part2/part2.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    AgentStatsTableComponent,
    ModalsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    Profile1Component,
    HelpComponent,
    CdrComponent,
    MonthlyCallComponent,
    DailyCallsComponent,
    AgentStatsComponent,
    QueueStatsComponent,
    Part1Component,
    Part2Component,

  ],
  exports: [
    FooterComponent,
    AgentStatsTableComponent,
    ModalsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,    
    Dashboard1Component
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
