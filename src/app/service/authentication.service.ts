import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service'; 


export class User{
  constructor(
    public status:string,
    public token:string,
    public isCookies:boolean,
    public isUserLoggedIn:boolean,
    public isSessionStorage:boolean,

     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient, private cookieService: CookieService) { 
    
  }

  //authenticate() {
    
    /*if (username === "test" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
    authenticate(username: string, password: string, domain: string) {
      this.cookieService.set('dn', domain); 
      sessionStorage.setItem('dn',domain);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'False' });
      //return this.httpClient.get<User>('http://localhost:8080/dashboard/loginTest/'+username+"/"+password+"/"+domain,{headers}).pipe(
        //return this.httpClient.get<User>('http://192.168.42.247:8080/dashboard/login/'+username+"/"+password+"/"+domain,{headers}).pipe(
      return this.httpClient.get<User>('http://192.168.42.247:8080/dashboard/login/'+username+"/"+password+"/"+domain,{headers}).pipe(
        map(
          userData => {
            let tokenStr= userData.token;   
           sessionStorage.setItem('token', tokenStr);
          //sessionStorage.setItem('username',username);
          sessionStorage.setItem('dn',domain);
          this.cookieService.set('token', tokenStr);  
        this.cookieService.set('dn', domain);  
        //console.log(this.cookieService.get('token'));  
        //console.log(this.cookieService.get('dn'));
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
    let tokenSession = sessionStorage.getItem('token')
    let tokenCookies = this.cookieService.get('token')
    //console.log(!(user === null))
    //console.log("cookies and session")
    
    //console.log("tokenCookies"+tokenCookies)

    if(!(tokenSession === null)){
      //console.log("tokenSession")
      //console.log(tokenSession === null)
      return true;
    }
    else if(!(tokenCookies.length < 10)){
      //console.log("cookies leangth gt 2")
      //console.log(tokenCookies === null)
      return true;
    }
    else{
      //console.log("FALSE_____")
      return false;
    }
   // return !((tokenCookies === null) || (tokenSession === null))
    //return !(tokenSession === null)
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('dn');
    sessionStorage.removeItem('username');
    this.cookieService.delete('token', '/');
    this.cookieService.set('token', 'null')
    
  }
}
