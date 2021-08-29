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

  constructor(private accountService:AccountService){}

  ngOnInit(): void {
    this.setCurrentUser();
  }

   //helper method
   setCurrentUser(){
    const user : User = JSON.parse(<string>localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
