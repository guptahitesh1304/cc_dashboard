import { Component, OnInit } from '@angular/core';
import { HttpClientService, QueuesDetailsNew } from 'src/app/service/http-client.service';
//import {Observable} from "rxjs/Rx";
//import {AnonymousSubscription} from "rxjs/Subscription";
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-queue-stats',
  templateUrl: './queue-stats.component.html',
  styleUrls: ['./queue-stats.component.css']
})
export class QueueStatsComponent implements OnInit{

  //private timerSubscription: AnonymousSubscription;

  //queuesDetails: QueuesDetails[];
  subscription: Subscription;
  
  queuesDetails: QueuesDetailsNew[];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];



  constructor(
    private httpClientService: HttpClientService
  ) {}
getQueuePerformanceData(){

  //this.httpClientService.getAllQueues().subscribe(queuedata => {
  this.httpClientService.getQueuePerformanceTableForDashboard().subscribe(queuedata => {
    this.queuesDetails = queuedata;
   // this.subscribeToData();
    //console.log(queuedata)
  });
}

  ngOnInit() {
//this.getQueuePerformanceData();
this.makePeriodicReq();
}

// Periodic Calls
makePeriodicReq() {
  this.subscription = timer(0, 5000).pipe(
    switchMap(() => this.httpClientService.getQueuePerformanceTableForDashboard())
  )
    .subscribe(queuedata => {
      this.queuesDetails = queuedata;
      //console.log(queuedata);
    });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

// private refreshData(): void {
//   this.postsSubscription = this.postService.getPosts().subscribe(posts => {
//       this.posts = posts;
//       this.subscribeToData();
//   });
// }

// private subscribeToData(): void {
//   this.timerSubscription = Observable.timer(8000).first().subscribe(() => this.getQueuePerformanceData());
// }

// public ngOnDestroy(): void {
//   if (this.timerSubscription) {
//       this.timerSubscription.unsubscribe();
//   }
// }

}
