import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo';
import { environment } from '../../environments/environment'

@Injectable()
export class TodoService {
  apiurl: string = environment.apiurl

  constructor(private http: HttpClient ) { }

  getTodos(): Observable<ITodo[]> {
    return this.http.get(`${this.apiurl}/todos`).pipe(
      map((data) => {
        return data as ITodo[];
      })
    );
  } // gettods 

}


