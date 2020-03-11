import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo'

@Injectable()
export class TodoService {
  apiurl: string = 'https://todos-api-dev.herokuapp.com';

  constructor(private http: HttpClient ) { }

  getTodos(): Observable<ITodo[]> {
    return this.http.get(`${this.apiurl}/todos`).pipe(
      map((data) => {
        return data as ITodo[];
      })
    );
  } // gettods 

}


