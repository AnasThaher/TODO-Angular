import { DialogBoxComponent } from './../dialog-box/dialog-box.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { MatDialog } from '@angular/material/dialog'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {



  todos = JSON.parse(localStorage.getItem("todos") as string) || [];;

  todoContent: string = '';
  @Input() userid: number = 0;
  @Input() showtodo: boolean = true;
  @Output() useridchange = new EventEmitter<number>();
  @Output() showreg = new EventEmitter<boolean>();
  @Output() showtodoChange = new EventEmitter<boolean>();
  @Input() tod: Todo[] = [];
  @Output() todchange = new EventEmitter();

  constructor(private dialog: MatDialog) {
    console.log(this.userid);


  }



  ngOnInit(): void {


  }


  edit(toRm: any) {
    const dialoRef = this.dialog.open(DialogBoxComponent, {
      data: { title: "Enter ToDo" }
    });
    dialoRef.afterClosed().subscribe(
      result => {
        console.log("My result data", result);
        let todos: Todo[] = JSON.parse(localStorage.getItem("todos") as string) || [];
        console.log(todos)
        todos.map(x => {

          if (x.content == toRm.content) {

            if (result.value.content != '' && result.value.content != 'test') {
              x.content = result.value.content;


            } else {
              console.log("the data is null");
              x.content = toRm.content;
              console.log("this x in null", x)
            }
            if (result.value.status == '') {
              console.log("status is null");
              x.status = "ToDo"
            } else {
              console.log("status have a value");
              x.status = result.value.status;

            }

          }

        });
        let map2 = this.tod.map(x => {

          if (x.content == toRm.content) {

            if (result.value.content != '' && result.value.content != 'test') {
              x.content = result.value.content;


            } else {
              console.log("the data is null");
              x.content = toRm.content;
            }
            if (result.value.status == '') {
              console.log("status is null");
              x.status = "ToDo"
            } else {
              x.status = result.value.status;

            }

          }

        });

        localStorage.setItem("todos", JSON.stringify(todos));

      }
    );

  }
  remove(toRm: any) {
    let todos = JSON.parse(localStorage.getItem("todos") as string) || [];
    console.log("befor", todos);
    todos = todos?.filter((v: any, i: number) => v.content != toRm.content);
    this.tod = this.tod?.filter((v: any, i: number) => v.content != toRm.content);
    localStorage.setItem("todos", JSON.stringify(todos));

  }


  addTodo() {
    console.log(this.userid);
    if (this.todoContent != '') {
      const str: String = this.todoContent + "";
      this.todos.push(
        {
          content: str,
          status: 'ToDo',
          userId: this.userid || 0,
        }

      );

      this.tod.push(
        {
          content: this.todoContent,
          status: "ToDo",
          userId: this.userid
        }

      );

      localStorage.setItem("todos", JSON.stringify(this.todos));
    } else {
      console.log("todo is empty");
      alert("todo is empty")
    }

    this.todoContent = "";
  }
  logOut(): void {
    this.showtodo = false;
    this.showreg.emit(true);
    this.showtodoChange.emit(false);

  }
}


