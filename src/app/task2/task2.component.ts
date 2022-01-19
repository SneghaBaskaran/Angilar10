import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  constructor() { }
  isDisabled = true;

  color: any = ['grey', 'grey', 'grey', 'grey'];
  width: any = ['350px', '350px', '350px', '350px'];
  height: any = ['150px', '150px', '150px', '150px'];

  
  displayedColumns: string[] = [];

  tableShow = false;

  dataSource= new MatTableDataSource([]);

  sschdata: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, status: true},
    {position: 2, name: 'Helium', weight: 4.0026,  status: true},
    {position: 3, name: 'Lithium', weight: 6.941,  status: true},
    {position: 4, name: 'Beryllium', weight: 9.0122,  status: true},
    {position: 5, name: 'Boron', weight: 10.811,  status: true}
  ];
  configurationdata: any[] = [
    {position: 1, name: 'Aconitum', weight: 1.0079,  status: false},
    {position: 2, name: 'Buttercup', weight: 4.0026,status: true},
    {position: 3, name: 'Cyclamen', weight: 6.941, status: false},
    {position: 4, name: 'Dutch Iris', weight: 9.0122, status: true},
    {position: 5, name: 'Echinacea', weight: 10.811, status: false},
    
  ];
 processdata: any[] = [
    {position: 1, name: 'Jaipur', weight: 1.0079,status: true},
    {position: 2, name: 'Delhi', weight: 4.0026, status: true},
    {position: 3, name: 'Mumbai', weight: 6.941, status: true},
    {position: 4, name: 'Agra', weight: 9.0122, status: true},
    {position: 5, name: 'Goa', weight: 10.811, status: true}
  ];
  alarmsdata: any[] = [
    {position: 1, name: 'Dog', weight: 1.0079, status: false},
    {position: 2, name: 'Puppy', weight: 4.0026, status: false},
    {position: 3, name: 'Turtle', weight: 6.941, status: false},
    {position: 4, name: 'Rabbit', weight: 9.0122,status: false},
    {position: 5, name: 'Parrot', weight: 10.811,status: false},
  ];
  ngOnInit(): void {
  }

getData() {
  this.isDisabled = false;
  this.color[0] = (this.sschdata.filter((val) => {
    return val.status === false;
  })).length !== 0 ? 'red' : 'green';
  this.color[1] = (this.configurationdata.filter((val) => {
    return val.status === false;
  })).length !== 0 ? 'red' : 'green';
  this.color[2] = (this. processdata.filter((val) => {
    return val.status === false;
  })).length !== 0 ? 'red' : 'green';
  this.color[3] = (this. alarmsdata.filter((val) => {
    return val.status === false;
  })).length !== 0 ? 'red' : 'green';
}
setData() {
  this.tableShow = false;
  this.color = ['grey', 'grey', 'grey', 'grey'];
  this.width = ['350px', '350px', '350px', '350px'];
  this.height = ['150px', '150px', '150px', '150px'];
  this.isDisabled = true;
  this.dataSource = new MatTableDataSource([]);
  this.displayedColumns = [];
}


// tslint:disable-next-line: typedef
getSSHCData() {
  this.width = ['370px', '350px', '350px', '350px'];
  this.height = ['160px', '150px', '150px', '150px']; 
  this.tableShow = true;
  this.displayedColumns = ['position', 'name', 'weight', 'status'];
  this.dataSource = new MatTableDataSource(this.sschdata);
}

// tslint:disable-next-line: typedef
getConfigurationData(){
  this.width = ['350px', '370px', '350px', '350px'];
  this.height = ['150px', '160px', '150px', '150px'];
  this.tableShow = true;
  this.displayedColumns = ['position', 'name', 'weight', 'status'];
  this.dataSource = new MatTableDataSource(this.configurationdata);
}

// tslint:disable-next-line: typedef
getProcessData () {
  this.width = ['350px', '350px', '370px', '350px'];
  this.height = ['150px', '150px', '160px', '150px'];
  this.tableShow = true;
  this.displayedColumns = ['position', 'name', 'weight', 'status'];
  this.dataSource = new MatTableDataSource(this.processdata);
}

// tslint:disable-next-line: typedef
getAlarmsData() {
  this.width = ['350px', '350px', '350px', '370px'];
  this.height = ['150px', '150px', '150px', '160px'];
  this.tableShow = true;
  this.displayedColumns = ['position', 'name', 'weight', 'status'];
  this.dataSource = new MatTableDataSource(this.alarmsdata);
}
moredetails(){
  console.log('welcome angular')

}
}
