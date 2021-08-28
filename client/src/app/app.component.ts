import { AccountService } from './_services/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The New Dating App written in Angular ver 12';
  users:any;

  constructor(private http:HttpClient,private accountService:AccountService){}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

   //helper method
   setCurrentUser(){
    const user : User = JSON.parse(<string>localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  //get list of all users and if any error output to console
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    },error=>{
      console.log(error);
    })
  }
}
