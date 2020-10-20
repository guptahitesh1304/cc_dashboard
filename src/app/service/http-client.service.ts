import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AgentStatsModel } from '../views/tables/basic-table/agent-stats-modal';

export class JSONTest{
 
  constructor(
    public name:string,
    public email:string,
    public phone:string,
  ) {}
}
export class QueuesDetails{
 
  constructor(
    public name:string,
    public displayName:string,
    public callsInWaiting:number,
    public agentsForQueue:number,
    public loggedInAgents:number,
    public awt:string,
    public aht:string,
    public totalAbandonedCalls:number,
    public totalNumberOfCalls:number,
    public slinPercentage:string,
    public call_back_request:number,
  ) {}
}

export class QueuesDetailsNew{
 
  constructor(
    public name:string,
    public displayName:string,
    public callsInWaiting:number,
    public agentsForQueue:number,
    public loggedInAgents:number,
    public awt:string,
    public aht:string,
    public totalAbandonedCalls:number,
    public totalNumberOfCalls:number,
    public call_back_request:number,
  ) {}
}
export class AgentStats{
 
  constructor(
    public totalNumberOfAgents:number,
    public agent_NotReady:number,
    public agent_Ready:number,
    public agent_Working:number,
    public agent_Talking:number,
  ) {}
}

export class DashboardSummary{
 
  constructor(
    public totalInboundCalls:number,
    public totalOutboundCalls:number,
    public totalCallRecieved:number,
    public totalCallAnswered:number,
    public totalMissedCalls:number,
    public totalCallInQueue:number,
    public totalATT:string,
    public totalAWT:string,
    public longestAHT:string,
    public longestAWT:string,
    public totalCallAbnd:number,
  ) {}
}

export class MonthlyCDRGraph{
 
  constructor(
    public totalInboundCalls:number,
    public totalOutboundCalls:number,
    public totalCallRecieved:number,
    public totalCallAnswered:number,
    // public totalMissedCalls:number,
    // public totalCallInQueue:number,
    // public totalATT:string,
    // public totalAWT:string,
    // public longestAHT:string,
    // public longestAWT:string,
    public totalCallAbnd:number,
  ) {}
}

export class DailyCallGraph{
 
  constructor(
    public hours: Array<any> = [],
    public calls: Array<any> = [],
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  tokenStr: string;

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/employees');
  }

  getAgentPerformanceComplete(): Observable<AgentStatsModel[]>{
    
    return this.httpClient.get<AgentStatsModel[]>('http://192.168.42.247:8080/dashboard/getAgentPerformanceComplete/');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }

  getAllQueues(): Observable<any>{
    
    return this.httpClient.get('http://192.168.42.247:8080/dashboard/getQueuePerformanceTable/');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }

  getQueuePerformanceTableForDashboard(): Observable<any>{
    
    return this.httpClient.get('http://192.168.42.247:8080/dashboard/getQueuePerformanceTableForDashboard/');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }

  getAgentStats(): Observable<any>{
    
    return this.httpClient.get('http://192.168.42.247:8080/dashboard/getAgentStatsToDashboard/');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }

  getDashboardSummary(): Observable<any>{
    
    return this.httpClient.get<DashboardSummary>('http://192.168.42.247:8080/dashboard/getQueueDashboardSummary/');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }
  getMonthlyCDRGraph(): Observable<any>{
    
    return this.httpClient.get<MonthlyCDRGraph>('http://192.168.42.247:8080/dashboard/getMonthlyCDRGraphData/');
  }
  getMonthlyCDRGraphTest(): Observable<any>{
    
    return this.httpClient.get<MonthlyCDRGraph>('http://192.168.42.247:8080/getMonthlyCDRGraphDataTest/');
  }

  getDailyCallsGraph(): Observable<any>{
    
    return this.httpClient.get('http://192.168.42.247:8080/dashboard/getDailyCallsGraph/');
    
  }

  getTest(): Observable<any>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }

  getCDR(): Observable<any>{
    return this.httpClient.get('http://192.168.42.247:8080/dashboard/getacd-cdr');
    //return this.httpClient.get<QueuesDetails[]>('http://192.168.42.247:8080/QueuePerformanceTableTest/'+token);
  }
}