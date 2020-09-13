import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from '../service/http-client.service';
import { CdrModal } from './cdr-modal';

@Component({
  selector: 'app-cdr-table',
  templateUrl: './cdr-table.component.html',
  styleUrls: ['./cdr-table.component.scss']
})
export class CdrTableComponent implements OnInit {
  ELEMENT_DATA:CdrModal[];
  //displayedColumns: string[] = ['userId', 'id', 'title'];
  displayedColumns: string[] = ['from', 'to', 'start', 'end', 'connect', 'extention', 'trunk'];
  dataSource = new MatTableDataSource<CdrModal>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpService: HttpClientService){}

  ngOnInit() {
    this.getCDRData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  public getCDRData(){
    let resp = this.httpService.getCDR();
    resp.subscribe(cdr =>this.dataSource.data=cdr as CdrModal[]);

  }
}