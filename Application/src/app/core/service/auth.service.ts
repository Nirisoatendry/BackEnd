import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  [x: string]: any;
  url = "http://localhost:8081";
  constructor(private http:HttpClient) { } //injecter HttpClient
  
  //Fonction pour envoyer les donnees au serveur 
  sendData (api:string,data:any):Observable<any>{
    return this.http.post(this.url+api,JSON.stringify(data)); 
  }
  
}

