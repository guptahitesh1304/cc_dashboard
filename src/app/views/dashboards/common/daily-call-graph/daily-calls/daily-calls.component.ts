import { Component, OnInit } from '@angular/core';
import { HttpClientService, DailyCallGraph } from 'src/app/service/http-client.service';
import 'chart.piecelabel.js';
import 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-daily-calls',
  templateUrl: './daily-calls.component.html',
  styleUrls: ['./daily-calls.component.css']
})
export class DailyCallsComponent implements OnInit {

  daily_graph_data:DailyCallGraph;

  public yMonthly: any = [];
  public xDaily: any = [];
  
  

  public token: any = sessionStorage.getItem('token');
  public chart3Type: string = 'line';
  public chartType = 'line';
  public DailyCallChartDatasets: Array<any> = [];
  public DailyCallChartLabels: Array<any> = []; //'00', '06H', '09H', '12H', '15H', '18H', '21H'];

  public DailyCallsChartColors: Array<any> = [
    {
      backgroundColor: '#fff',
      borderColor: '#2196f3',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#2196f3',
      pointHoverBackgroundColor: '#2196f3',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
      fill: false
    },
    {
      backgroundColor: '#fff',
      borderColor: '#ff8eaf',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#ff8eaf',
      pointHoverBackgroundColor: '#ff8eaf',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)',
      fill: false
    }

  ];

  public DailyCallsChartOptions: any = {
    responsive: true,
    fill: false,
    bezierCurve: false,
    lineTension: 0,
    legend: {
      position: 'bottom',
      labels: {
        // fontColor: '#d9d9d9',
        fontColor: '#5b5b6a',
        fontSize: 11,
        usePointStyle: true,
        padding: 10
      }
    },

    title: {
      display: false,
      text: 'Daily Call'
    },
    scales: {
      yAxes: [{
        ticks: {
          //fontColor: '#d9d9d9',
          fontColor: '#5b5b6a',
        }
      }],
      xAxes: [{
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
          offset: 6,
          padding: 0
        }
      }
    }
  };
 




  constructor(
    private httpClientService: HttpClientService
  ) {
    this.DailyCallChartDatasets = [{ data: [], label: 'Daily Calls by Hours' }]
  }

  getDailyGraphData(){
    this.httpClientService.getDailyCallsGraph().subscribe(dailyCallsGraphdata => {
      this.daily_graph_data = dailyCallsGraphdata;
      const key_hurs = Object.keys(dailyCallsGraphdata);
      this.DailyCallChartLabels = key_hurs;
      const data0 = Object.values(dailyCallsGraphdata);
      this.DailyCallChartDatasets[0].data = data0;
      console.log("this.daily_graph_data")
      console.log(this.daily_graph_data)
      console.log("key_hurs")
      console.log(key_hurs)
      console.log(data0)
      console.log("this.DailyCallChartLabels")
      console.log(data0)
    });

  }

  refresh() {    
    setTimeout(function () {
        location.reload()
    }, 50000);
}
  ngOnInit() {
this.getDailyGraphData();
//this.refresh();
    
  }
}
