import { Component, OnInit } from '@angular/core';

import { HttpClientService, QueuesDetails, AgentStats, DashboardSummary, MonthlyCDRGraph, DailyCallGraph } from 'src/app/service/http-client.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import 'chart.piecelabel.js';
import 'chartjs-plugin-datalabels'



@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  // queuesDetails: QueuesDetails[];

  subscriptionDashBoardSummary: Subscription;
  subscriptionMonthlyGraph: Subscription;
  subscriptionAgentGraph: Subscription;
   agentStats: AgentStats;
   dashboardSummary: DashboardSummary;
   monthlyCDRGraph: MonthlyCDRGraph;
  // daily_graph_data:DailyCallGraph;

  // public yMonthly: any = [];
  // public xDaily: any = [];
  
  

  // public token: any = sessionStorage.getItem('token');
  // public map: any = { lat: 51.678418, lng: 7.809007 };
   public chart1Type: string = 'bar';
  // public chart2Type: string = 'pie';
  // public chart3Type: string = 'line';
  // public chart4Type: string = 'radar';
   public chart5Type: string = 'doughnut';
  // public totalcalls: number;
  // public totalabndn: number;
  // public totalans: number;
  // public totalIN: number;
  // public totalOut: number;


  public monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
public thisMonth = this.monthNames[(new Date()).getMonth()];

//   tab: any = 'tab1';
//   tab1: any
//   tab2: any
//   tab3: any
//   Clicked: boolean


//   public chartType = 'line';

   public chartDatasets: Array<any> = [];
//   public WeeklyChartDatasets: Array<any> = [
//     { data: [50, 40, 60, 51, 56, 55, 40], label: '#Recieved' },
//     { data: [28, 80, 40, 69, 36, 37, 110], label: '#Answered' }
//   ];
//   public DailyCallChartDatasets: Array<any> = [];
//   public DailyCallChartLabels: Array<any> = []; //'00', '06H', '09H', '12H', '15H', '18H', '21H'];
  public chartLabels: Array<any> = [this.thisMonth];

 
  public chartColors: Array<any>  = [
    { backgroundColor: '#2196f3' },
    { backgroundColor: '#ff8eaf' },
    { backgroundColor: '#da78dcd9' },
    { backgroundColor: '#1bd490' },
    { backgroundColor: '#ffad33' },
    { backgroundColor: '#ff3333' },
  ]
//   public DailyCallsChartColors: Array<any> = [
//     {
//       backgroundColor: '#fff',
//       borderColor: '#2196f3',
//       pointBackgroundColor: 'rgb(103, 58, 183)',
//       pointBorderColor: '#2196f3',
//       pointHoverBackgroundColor: '#2196f3',
//       pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
//       fill: false
//     },
//     {
//       backgroundColor: '#fff',
//       borderColor: '#ff8eaf',
//       pointBackgroundColor: 'rgb(103, 58, 183)',
//       pointBorderColor: '#ff8eaf',
//       pointHoverBackgroundColor: '#ff8eaf',
//       pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
//       fill: false
//     }

//   ];
  public agentChartData: Array<any> = [
    //{ data: [7, 1, 5, 2] }
];

  public agentChartLabels: Array<any> = ['Working', 'Talking'];

  public agentChartColors: Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
    hoverBorderWidth: 2,
    backgroundColor: ["#2196f3", "#ff8eaf", "#1cc88a", "#ffad33"],
    hoverBackgroundColor: ["#2196f3", "#ff8eaf", "#1cc88a", "#ffad33"]
  }];
  public agentChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        //fontColor: '#d9d9d9',5b5b6a
        fontColor: '#5b5b6a',
        fontSize: 11,
        usePointStyle: true,
        padding: 5
      }
    },
    pieceLabel: {
      render: 'percentage',
      //fontColor: '#d9d9d9',
      fontColor: '#5b5b6a',
      fontSize: 14,
      anchor: 'end',
      position: 'outside',
      arc: true
    },

    title: {
      display: false,
      text: 'AGENT STATUS',
      fontFamily: 'Arial',
      fontSize: 14,
      fontColor: '#8c8c8c',
      lineHeight: 1,
      padding: 2,
      horizontalAlign: screenLeft,
    }
  };
//   public DailyCallsChartOptions: any = {
//     responsive: true,
//     fill: false,
//     bezierCurve: false,
//     lineTension: 0,
//     legend: {
//       position: 'bottom',
//       labels: {
//         // fontColor: '#d9d9d9',
//         fontColor: '#5b5b6a',
//         fontSize: 11,
//         usePointStyle: true,
//         padding: 10
//       }
//     },

//     title: {
//       display: false,
//       text: 'Daily Call'
//     },
//     scales: {
//       yAxes: [{
//         ticks: {
//           //fontColor: '#d9d9d9',
//           fontColor: '#5b5b6a',
//         }
//       }],
//       xAxes: [{
//         ticks: {
//           //fontColor: '#d9d9d9',
//           fontColor: '#5b5b6a',
//         }
//       }],
//       plugins: {
//         datalabels: {
//           align: 'end',
//           anchor: 'end',
//           backgroundColor: null,
//           borderColor: null,
//           borderRadius: 4,
//           borderWidth: 1,
//           color: '#fff',
//           font: {
//             size: 11,
//             weight: 600
//           },
//           offset: 6,
//           padding: 0
//         }
//       }
//     }
//   };
//   public dateOptionsSelect: any[];
//   public bulkOptionsSelect: any[];
//   public showOnlyOptionsSelect: any[];
//   public filterOptionsSelect: any[];

  public chartOptions: any = {
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
    this.chartDatasets = [
      { data: [], label: 'Recieved' },
      { data: [], label: 'Inbound' },
      { data: [], label: 'Outbound' },
      { data: [], label: 'Answered' },
      { data: [], label: 'Abandoned' }
    ];
    this.agentChartData = [{ data: [] }];
    // this.DailyCallChartDatasets = [{ data: [], label: 'Daily Calls by Hours' }]
  }
// getQueuePerformanceData(){

//   this.httpClientService.getAllQueues().subscribe(queuedata => {
//     this.queuesDetails = queuedata;
//     console.log(queuedata)
//   });
// }
  // getDashBoardSummaryData(){

  //   this.httpClientService.getDashboardSummary().subscribe(dashboarddata => {
  //     this.dashboardSummary = dashboarddata;
  //     console.log(dashboarddata)

  //   });
  // }
  getDashBoardSummaryData() {
    this.subscriptionDashBoardSummary = timer(0, 10000).pipe(
      switchMap(() => this.httpClientService.getDashboardSummary())
    )
      .subscribe(dashboarddata => {
        this.dashboardSummary = dashboarddata;
        //console.log(dashboarddata);
      });
  }

  getAgentGraphData(){
    this.subscriptionAgentGraph = timer(0, 30000).pipe(
      switchMap(() => this.httpClientService.getAgentStats())
    )
      .subscribe(agentdata => {
      this.agentStats = agentdata;
      //console.log(agentdata)
      const data0 = [this.agentStats.agent_Working, this.agentStats.agent_Talking];
      this.agentChartData[0].data = data0;
    });
  }

  getMonthlyGraphData(){
    this.subscriptionMonthlyGraph = timer(0, 60000).pipe(
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


      this.chartDatasets[0].data = data0;
      this.chartDatasets[1].data = data1;
      this.chartDatasets[2].data = data2;
      this.chartDatasets[3].data = data3;
      this.chartDatasets[4].data = data4;
      this.chartLabels[0] = this.thisMonth;
      //this.chartDatasets[5].data = data5;

      // console.log("rec" + data0)
      // console.log("IN" + data1)
      // console.log("Out" + data2)
      // console.log("Ans" + data3)
      // console.log("ABnd" + data4)
      //console.log("Missed" + data5)

    });
  }

  // getDailyGraphData(){
  //   this.httpClientService.getDailyCallsGraph().subscribe(dailyCallsGraphdata => {
  //     this.daily_graph_data = dailyCallsGraphdata;
  //     const key_hurs = Object.keys(dailyCallsGraphdata);
  //     this.DailyCallChartLabels = key_hurs;
  //     const data0 = Object.values(dailyCallsGraphdata);
  //     this.DailyCallChartDatasets[0].data = data0;
  //     console.log("this.daily_graph_data")
  //     console.log(this.daily_graph_data)
  //     console.log("key_hurs")
  //     console.log(key_hurs)
  //     console.log(data0)
  //     console.log("this.DailyCallChartLabels")
  //     console.log(data0)
  //   });

  // }

  ngOnInit() {
    //let token = sessionStorage.getItem('token');
//this.getQueuePerformanceData();
this.getDashBoardSummaryData();
 this.getMonthlyGraphData();
 this.getAgentGraphData();
// this.getDailyGraphData();
// this.refresh();
    
  }

  ngOnDestroy() {
    this.subscriptionAgentGraph.unsubscribe();
    this.subscriptionDashBoardSummary.unsubscribe();
    this.subscriptionMonthlyGraph.unsubscribe();
  }
}

