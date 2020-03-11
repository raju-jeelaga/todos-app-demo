import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  isLoading:boolean = false;
  todos: ITodo[] = []
  constructor(private http:TodoService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.http.getTodos().subscribe((data:ITodo[]) =>{
      this.isLoading = false;
       this.todos = data;
       console.log("Dada", this.todos);
    });
  }

}
