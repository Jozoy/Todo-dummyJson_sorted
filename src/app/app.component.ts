
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: any[] = [];

  async ngOnInit() {
    const res = await fetch('https://dummyjson.com/todos');

    const temp = await res.json();
    this.todos = temp.todos;


    // her har jeg sorterte  listene ved bruke av den 'Completed' true og false
    this.todos.sort((a, b) => {
      // sorter fullførte todo list(true) før de ikke fullførte (false)
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });

    console.log(this.todos);
  }
  markAsCompleted(todo: any): void {
    todo.completed = true;
    this.todos.sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1);
  }
  markAsunCompleted(todo: any): void {
    todo.completed = false;
    this.todos.sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1);
  }
}
