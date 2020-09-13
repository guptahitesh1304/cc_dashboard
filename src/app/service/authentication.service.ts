import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User{
  constructor(
    public status:string,
    public token:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { 
    
  }

  //authenticate() {
    
    /*if (username === "test" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
    authenticate(username: string, password: string, domain: string) {
      sessionStorage.setItem('username',username);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });
      //return this.httpClient.get<User>('http://localhost:8080/dashboard/loginTest/'+username+"/"+password+"/"+domain,{headers}).pipe(
      return this.httpClient.get<User>('http://192.168.1.15:8080/dashboard/login/'+username+"/"+password+"/"+domain,{headers}).pipe(
        map(
          userData => {
            let tokenStr= userData.token;   
           sessionStorage.setItem('token', tokenStr);
          sessionStorage.setItem('username',username);
          sessionStorage.setItem('dn',domain);
           return userData;
          }
        )
   
       );
     }
   
      //return this.httpClient.get<string>('http://localhost:8080/Test',{headers});}
      // .pipe(
      //  map(  
      //    userData => {
      //     sessionStorage.setItem('username',username);
      //     let tokenStr= userData.token\    
      //     sessionStorage.setItem('token', tokenStr);
      //     if(tokenStr==='g7lsrphhrkim1jkvbt88'){
      //     return true;
      //     }else {
      //       return false;
      //     }
      //    }
      //  )
  
      // );
    
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });
    //return this.httpClient.get<string>('http://localhost:8080/Test',{headers});}

  isUserLoggedIn() {
    let tokenStr = sessionStorage.getItem('token')
    //console.log(!(user === null))
    return !(tokenStr === null)
  }

  logOut() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('dn')
    sessionStorage.removeItem('username')
    
  }
}
