import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {User} from '../user';
import { Router} from '@angular/router';
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  constructor( private router: Router ) {

   }

  hide = true;
  user: User = {username : "", password : "" , };

  ngOnInit(): void {
  }

  formSubmit(value) {
    console.log("user", this.user);
    console.log("user", value.form.value);
    // this.router.navigate(["/Task1"]);
  }

 
}
