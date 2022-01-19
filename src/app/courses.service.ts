import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses} from './courses'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  private dburl = 'http://localhost:3000/courses';

  public get_all_course(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.dburl);
  }

  public get_course_by_id(id): Observable<Courses> {
    return this.http.get<Courses>(this.dburl + "/" + id);
  }

  public create_course(data): Observable<Courses> {
    return this.http.post<Courses>(this.dburl, data);
  }

  public edit_course(data): Observable<Courses> {
    return this.http.patch<Courses>(this.dburl + "/" + data.id, data);
  }

  public delete_course(id): Observable<Courses> {
    return this.http.delete<Courses>(this.dburl + "/" + id);
  }
}
