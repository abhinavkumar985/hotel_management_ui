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
export class LoginService {
   constructor(private http:HttpClient) { }
   authUser(value){
        return this.http.post(environment.baseurl+'/login',JSON.stringify(value),httpOptions)
   }
}