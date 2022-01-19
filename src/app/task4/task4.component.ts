import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService} from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
 
  course:Course = { id: null, name: '', pay: null, duration: '' };

  operation = "Create";

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        if(params.id) {
          this.operation = "Edit";
          this.courseService.get_course_by_id(params.id).subscribe(
            res => {
              this.course = res;
            }
          )
        }
      }
    )
  }
  save(data) {
    if(this.operation === 'Edit') {
      this.courseService.edit_course(data).subscribe(
        res => {
          this.router.navigate(["/"]);
        },
        err => {}
      )
    } else {
      this.courseService.create_course(data).subscribe(
        res => { 
          this.router.navigate(["/"]);
        },
        err => {}
      )
    }
  }
}
