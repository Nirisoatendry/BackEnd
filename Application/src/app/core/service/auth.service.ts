import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = "http://localhost:8080";
  constructor(private http:HttpClient) { } //injecter HttpClient
  
  // sendData (api:string,data:any):Observable<any>{
  //   return this.http.post(this.url+api,JSON.stringify(data)) 
  // }
  sendData(api:string,data:any) :Observable<any>{
    return this.http.post(this.url+api,JSON.stringify(data));
  }
}

