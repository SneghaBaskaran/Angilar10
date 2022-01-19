import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  
  private dburl = 'http://localhost:3000/course';

  public get_all_course(): Observable<Course[]> {
    return this.http.get<Course[]>(this.dburl);
  }

  
  public get_course_by_id(id): Observable<Course> {
    return this.http.get<Course>(this.dburl + "/" + id);
  }

  public create_course(data): Observable<Course> {
    return this.http.post<Course>(this.dburl, data);
  }

  public edit_course(data): Observable<Course> {
    return this.http.patch<Course>(this.dburl + "/" + data.id, data);
  }
}
