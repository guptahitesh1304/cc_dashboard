import { Component, OnInit } from '@angular/core';
import  'chart.piecelabel.js';



@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';

  tab : any = 'tab1';
  tab1 : any
  tab2 : any
  tab3 : any
  Clicked : boolean


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: 'Recieved'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: 'Answered'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: 'Abandoned'}
  ];
  public WeeklyChartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#Recieved'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#Answered'}
  ];
  public DailyCallChartDatasets: Array<any> = [
    {data: [0, 12, 60, 35, 49, 75, 20], label: '#Inbound', lineTension: 0},
    {data: [2, 18, 40, 69, 36, 37, 11], label: '#Outbound', lineTension: 0}
  ];
  public DailyCallChartLabels: Array<any> = ['00','06H', '09H', '12H', '15H', '18H', '21H'];
  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors:Array<any> = [

  ];
  public DailyCallsChartColors:Array<any> = [
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
  public doughnutChartData:Array<any> = [
    {data: [150, 21, 60, 51]}
  ];

  public doughnutChartLabels:Array<any> = ['Working', 'Not Ready', 'Ready', 'Talking'];

  public doughnutChartColors:Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
      hoverBorderWidth: 2, 
      backgroundColor: ["#2196f3", "#ff8eaf", "#1cc88a", "#ffad33"], 
      hoverBackgroundColor: ["#2196f3", "#ff8eaf", "#1cc88a", "#ffad33"]
  }];
  public doughnutChartOptions:any = { 
    responsive: true,
    maintainAspectRatio: false,
    legend: {
			position : 'bottom',
			labels : {
        //fontColor: '#d9d9d9',5b5b6a
        fontColor: '#5b5b6a',
				fontSize: 11,
				usePointStyle : true,
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
      arc:true
		},
		
  title: {
    display: false,
    text: 'AGENT STATUS',
    fontFamily:'Arial',
    fontSize:14,
    fontColor:'#8c8c8c',
    lineHeight:1,
    padding:2,
    horizontalAlign:screenLeft,
  }
};
public DailyCallsChartOptions:any = { 
  responsive: true,
  fill: false,
  bezierCurve: false,
  lineTension: 0,
  legend: {
    position : 'bottom',
    labels : {
     // fontColor: '#d9d9d9',
      fontColor: '#5b5b6a',
      fontSize: 11,
      usePointStyle : true,
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
  }]
}
};
  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    barThickness: 10,
   legend: {
			position : 'bottom',
			labels : {
        //fontColor: '#d9d9d9',
        fontColor: '#5b5b6a',
				fontSize: 11,
				usePointStyle : true,
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
        barThickness: 8,  // number (pixels) or 'flex'
        maxBarThickness: 10,
        ticks: {
          //fontColor: '#d9d9d9',
          fontColor: '#5b5b6a',
        }
      }]
    }
  };

  
  constructor() {
  
  }

  ngOnInit() {
  }


 

}

