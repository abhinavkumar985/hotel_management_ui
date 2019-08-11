import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable()
export class HomeService {
   constructor(private http:HttpClient) { }
   logout(){
        return this.http.get(environment.baseurl+'/logout')
   }
}