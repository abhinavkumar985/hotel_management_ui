import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable()
export class GuestService {
   constructor(private http:HttpClient) { }
   getAllGuest(){
        return this.http.get(environment.baseurl+'/getAllGuest')
   }
}