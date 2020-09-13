import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/service/http-client.service';
import { AgentStatsModel } from './agent-stats-modal';


@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})

export class BasicTableComponent implements OnInit {
  ELEMENT_DATA:AgentStatsModel[];
  //displayedColumns: string[] = ['userId', 'id', 'title'];
  displayedColumns: string[] = ['agent','calls', 'missed', 'duration', 'talk', 'wait', 'ring',  'hold', ];
  dataSource = new MatTableDataSource<AgentStatsModel>(this.ELEMENT_DATA);


  constructor(private httpService: HttpClientService){}

  ngOnInit() {
    this.getAgentStatsData();
  }

  public getAgentStatsData(){
    let resp = this.httpService.getAgentPerformanceComplete();
    resp.subscribe(cdr =>this.dataSource.data=cdr as AgentStatsModel[]);
console.log(this.dataSource.data);
  }
}