import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The New Dating App written in Angular ver 12';
  users:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getUsers();
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
