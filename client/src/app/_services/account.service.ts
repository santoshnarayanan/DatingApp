import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  //Special Observable declared
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }

  // after logging set user key in localstorage
  login(model:any){
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any)=>{
        const user:User =  response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  //helper method
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  //remove user key after logging out
  logout():void{
    localStorage.removeItem('user');
    this.currentUserSource.next();
  }
}
