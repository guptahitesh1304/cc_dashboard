import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: ElementRef;

  clicked: boolean;
  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any
  Clicked: boolean

  constructor(private loginService: AuthenticationService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() { }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  onClick(check: number) {
    //    console.log(check);
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else if (check == 3) {
      this.tab = 'tab3';
    } else {
      this.tab = 'tab4';
    }

  }
  onSwitch(check: any) {

    switch (check) {
      case 1:
        return 'tab1';
      case 2:
        return 'tab2';
      case 3:
        return 'tab3';
      case 4:
        return 'tab4';
    }

  }

}
