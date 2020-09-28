import { Component, OnInit } from '@angular/core';
import { HttpClientService, AgentStats} from 'src/app/service/http-client.service';
import 'chart.piecelabel.js';



@Component({
  selector: 'app-agent-stats',
  templateUrl: './agent-stats.component.html',
  styleUrls: ['./agent-stats.component.css']
})
export class AgentStatsComponent implements OnInit {

  agentStats: AgentStats;

  public yMonthly: any = [];
  public xDaily: any = [];
  
  

  public token: any = sessionStorage.getItem('token');

  public chart5Type: string = 'doughnut';
  public agentChartData: Array<any> = [
    //{ data: [7, 1, 5, 2] }
];

  public agentChartLabels: Array<any> = ['Working', 'Ready', 'Talking'];

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



  constructor(
    private httpClientService: HttpClientService
  ) {
    this.agentChartData = [{ data: [] }];
    }

  getAgentGraphData(){
    this.httpClientService.getAgentStats().subscribe(agentdata => {
      this.agentStats = agentdata;
      //console.log(agentdata)
      const data0 = [this.agentStats.agent_Working, this.agentStats.agent_Ready, this.agentStats.agent_Talking];
      this.agentChartData[0].data = data0;
    });
  }


  refresh() {    
    setTimeout(function () {
        location.reload()
    }, 40000);
}
  ngOnInit() {
this.getAgentGraphData();
//this.refresh();
    
  }
}

