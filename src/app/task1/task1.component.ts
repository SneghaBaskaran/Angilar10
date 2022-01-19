import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  public id: number = 1;
  public name:string= 'Snegha Baskaran';
  public department:string='IT';
  public basicpay: number = 45000;
  public bonus: number = 3000;
  public deduction: number = 100;
  public total : number =55900;
  
  constructor() { }

  ngOnInit(): void {
  }

}
