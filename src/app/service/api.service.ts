import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BaseUrl:any= "https://rpa-app.herokuapp.com";
 
  isLoggedInStatus:any;


   private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");


   private options = {
    headers: this.httpHeaders
   };


   constructor(private http: HttpClient) { }

  get isLoggedIn(){
    this.isLoggedInStatus = localStorage.isLoggedInStatus
    if(!this.isLoggedInStatus){
      return false
    } else {
      return true
    }
  }



   // login api
  Login(payload){
    return this.http.post(this.BaseUrl+'/customer/login', payload, this.options);
  }

  //save GRA certificate Task Bot Parameters
  GRAParamSave(payload){
  return this.http.post(this.BaseUrl+'/customer/saveDB', payload, this.options);
  }

  

}
