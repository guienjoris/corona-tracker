import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'applications/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'https://coronavirus-tracker-api.herokuapp.com';
  constructor(private Http: HttpClient) { 
    httpOptions.headers.append('Access-Control-Allow-Origin', '*"');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    }
  getAll(){
    return this.Http.get(`${this.url}/all`,httpOptions)
  }
  
}
