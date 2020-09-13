import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  token = '';
  selectedDay: string = '';
  encrypted_password: any ='';

  
md5 = new Md5();


  selectedLevel: { name: any; };
  data:Array<Object> = [
      {id: 0, name: "compassoffices.ak1.cloudpbx.net.nz"},
      {id: 1, name: "activata.ak1.cloudpbx.net.nz"},
      {id: 2, name: "connecta.ak1.cloudpbx.net.nz"}
  ];


  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    //console.log(this.username+' password -'+this.password);
    // this.loginservice.authenticate(this.username, this.password).subscribe((data: any)=>{
    //   this.token = data.token;
    //   sessionStorage.setItem('token', this.token);
      
    //   console.log(data);
    // })
    
    //this.refresh();

    }

  // checkLogin() {
    
  //   console.log(this.username+' password -'+this.password);
  //   sessionStorage.setItem('username',this.username);
  //   //if (this.loginservice.authenticate(/*this.username, this.password*/)) {
  //   if((this.token).length > 10){
  //     this.router.navigate([''])
  //     this.invalidLogin = false
  //   } else
  //     this.invalidLogin = true
  // }

  refresh() {    
    setTimeout(function () {
        location.reload()
    }, 5000);
}

  checkLogin() {
    console.log("domain"+this.selectedDay);
    console.log("username"+this.username);
    //console.log("password"+this.password);
    //console.log(this.md5.appendStr(this.password).end());
    this.encrypted_password = Md5.hashStr(this.password);
    //console.log("Encrypted password"+this.encrypted_password);
    (this.loginservice.authenticate(this.username, this.encrypted_password, this.selectedDay).subscribe(
      (data: any)=>{
        this.token = data.token;
    sessionStorage.setItem('token', this.token);
    sessionStorage.setItem('dn', this.selectedDay);
      
      console.log(data);
        this.router.navigate([''])
        this.invalidLogin = false
      },
      _error => {
        this.invalidLogin = true

      }
    )
    );

  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
}