import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from '../service/http-client.service';
import { QueuesDetailsModal } from './QueuesDetailsModal';

@Component({
  selector: 'app-q-performance-table',
  templateUrl: './q-performance-table.component.html',
  styleUrls: ['./q-performance-table.component.scss']
})
export class QPerformanceTableComponent implements OnInit {
  ELEMENT_DATA:QueuesDetailsModal[];
  //displayedColumns: string[] = ['userId', 'id', 'title'];
  displayedColumns: string[] = ['name', 'waiting', 'agents', 'aht', 'awt', 'Abandond', 'total', 'cb','sl'];
  dataSource = new MatTableDataSource<QueuesDetailsModal>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpService: HttpClientService){}

  ngOnInit() {
    this.getQueuePerformanceTable();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  public getQueuePerformanceTable(){
    let resp = this.httpService.getAllQueues();
    resp.subscribe(cdr =>this.dataSource.data=cdr as QueuesDetailsModal[]);

  }
}