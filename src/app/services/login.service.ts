import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  flag:number;
  constructor() {
   }
  loginUser(){
    this.flag=1;
  }

  isLoggedIn(){
    if (this.flag===1)
     {return true;} 
    
   return false;
  }
  logout(){
    this.flag=0;
  }
}
