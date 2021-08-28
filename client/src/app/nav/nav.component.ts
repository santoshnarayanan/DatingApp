import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any ={};
  loggedIn: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login():void{
    this.accountService.login(this.model).subscribe(response=> {
      console.log(response);
      this.loggedIn = true;
    }, error=> {
      console.log(error);
    })
  }

  logout():void{
    this.accountService.logout();
    this.loggedIn = false;  //indicate user has logged out
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user; //!! means is it null
    }, error=>{
      console.log(error);
    })
  }

}
