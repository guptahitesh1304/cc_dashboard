import { Component, OnInit } from '@angular/core';
import { HttpClientService,MonthlyCDRGraph } from 'src/app/service/http-client.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import 'chart.piecelabel.js';
import 'chartjs-plugin-datalabels'



@Component({
  selector: 'app-monthly-call',
  templateUrl: './monthly-call.component.html',
  styleUrls: ['./monthly-call.component.css']
})
export class MonthlyCallComponent implements OnInit {

  monthlyCDRGraph: MonthlyCDRGraph;
  subscription: Subscription;

  public token: any = sessionStorage.getItem('token');
  public monthlyChartType: string = 'bar';
  public totalcalls: number;
  public totalabndn: number;
  public totalans: number;
  public totalIN: number;
  public totalOut: number;


  public monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
public thisMonth = this.monthNames[(new Date()).getMonth()];
  public monthlychartDatasets: Array<any> = [];
  public monthlychartLabels: Array<any> = [];

 
  public monthlychartColors: Array<any>  = [
    { backgroundColor: '#2196f3' },
    { backgroundColor: '#ff8eaf' },
    { backgroundColor: '#da78dcd9' },
    { backgroundColor: '#1bd490' },
    { backgroundColor: '#ffad33' },
    { backgroundColor: '#ff3333' },
  ];
 public monthlychartOptions: any = {
    responsive: true,
    barThickness: 20,
    legend: {
      position: 'bottom',
      labels: {
        //fontColor: '#d9d9d9',
        fontColor: '#5b5b6a',
        fontSize: 11,
        usePointStyle: true,
        padding: 10
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          //fontColor: '#d9d9d9',
          fontColor: '#5b5b6a',
        }
      }],
      xAxes: [{
        barThickness: 35,  // number (pixels) or 'flex'
        maxBarThickness: 75,
        ticks: {
          //fontColor: '#d9d9d9',
          fontColor: '#5b5b6a',
        }
      }],
      plugins: {
        datalabels: {
          align: 'end',
          anchor: 'end',
          backgroundColor: null,
          borderColor: null,
          borderRadius: 4,
          borderWidth: 1,
          color: '#fff',
          font: {
            size: 11,
            weight: 600
          },
          offset: 4,
          padding: 0
        }
      }
    }
  };


  constructor(
    private httpClientService: HttpClientService
  ) {
    this.monthlychartDatasets = [
      { data: [], label: 'Recieved' },
      { data: [], label: 'Inbound' },
      { data: [], label: 'Outbound' },
      { data: [], label: 'Answered' },
      { data: [], label: 'Abandoned' }
    ];
  }
getMonthlyGraphData(){
    this.httpClientService.getMonthlyCDRGraph().subscribe(monthlyGraphData => {
      this.monthlyCDRGraph = monthlyGraphData;
      //console.log(this.monthlyCDRGraph)
      const data0 = [this.monthlyCDRGraph.totalCallRecieved];
      const data1 = [this.monthlyCDRGraph.totalInboundCalls];
      const data2 = [this.monthlyCDRGraph.totalOutboundCalls];
      const data3 = [this.monthlyCDRGraph.totalCallAnswered];
      const data4 = [this.monthlyCDRGraph.totalCallAbnd];
      //const data5 = [this.monthlyCDRGraph.totalMissedCalls];


      this.monthlychartDatasets[0].data = data0;
      this.monthlychartDatasets[1].data = data1;
      this.monthlychartDatasets[2].data = data2;
      this.monthlychartDatasets[3].data = data3;
      this.monthlychartDatasets[4].data = data4;
      this.monthlychartLabels[0] = this.thisMonth;
      //this.chartDatasets[5].data = data5;

      // console.log("rec" + data0)
      // console.log("IN" + data1)
      // console.log("Out" + data2)
      // console.log("Ans" + data3)
      // console.log("ABnd" + data4)
      //console.log("Missed" + data5)

    });
  }

  ngOnInit() {
//this.getMonthlyGraphData();
this.makePeriodicReq();
//this.refresh();
    
  }

  // Periodic Calls
makePeriodicReq() {
  this.subscription = timer(0, 60000).pipe(
    switchMap(() => this.httpClientService.getMonthlyCDRGraph())
  )
    .subscribe(monthlyGraphData => {
      this.monthlyCDRGraph = monthlyGraphData;
      //console.log(this.monthlyCDRGraph)
      const data0 = [this.monthlyCDRGraph.totalCallRecieved];
      const data1 = [this.monthlyCDRGraph.totalInboundCalls];
      const data2 = [this.monthlyCDRGraph.totalOutboundCalls];
      const data3 = [this.monthlyCDRGraph.totalCallAnswered];
      const data4 = [this.monthlyCDRGraph.totalCallAbnd];
      //const data5 = [this.monthlyCDRGraph.totalMissedCalls];


      this.monthlychartDatasets[0].data = data0;
      this.monthlychartDatasets[1].data = data1;
      this.monthlychartDatasets[2].data = data2;
      this.monthlychartDatasets[3].data = data3;
      this.monthlychartDatasets[4].data = data4;
      this.monthlychartLabels[0] = this.thisMonth;
      //this.chartDatasets[5].data = data5;

      // console.log("rec" + data0)
      // console.log("IN" + data1)
      // console.log("Out" + data2)
      // console.log("Ans" + data3)
      // console.log("ABnd" + data4)
      //console.log("Missed" + data5)
      
    });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
