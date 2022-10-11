import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private newuser:HttpClient) { }
  viewData=()=>{
    return this.newuser.get("https://jsonplaceholder.typicode.com/users")
  }
}
