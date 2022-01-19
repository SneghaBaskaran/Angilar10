import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';
import {MatDialog} from '@angular/material/dialog';
import { FormoduleComponent } from './formodule/formodule.component';
@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {
  course:Courses[];

  constructor(private coursesService:  CoursesService, private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.coursesService.get_all_course().subscribe(
      res => {
        console.log(res);
        this.course = res;
      },
      err => {}
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open( FormoduleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  add_course(){
    this.router.navigate(["/courses/new"]);
  }

  edit_course(id) {
    this.router.navigate(["/courses/" + id + "/edit"]);
  }

  delete_course(id) {
    this.coursesService.delete_course(id).subscribe(
      res => {},
      err => {}
    );
  }

}
