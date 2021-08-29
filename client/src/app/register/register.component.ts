import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any ={};
  @Input()  usersFromHomeComponent:any;
  @Output()  cancelRegister = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.model);
  }

  cancelRegisterMode(){
    console.log("cancelRegisterMode() is called");
    this.cancelRegister.emit(false);
  }
}
