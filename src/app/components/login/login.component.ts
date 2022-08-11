import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid = 2;
  @Output() userId = new EventEmitter<number>();
  @Input() showlog: boolean | undefined;
  @Output() showtodonew = new EventEmitter<boolean>();
  @Output() showlogChange = new EventEmitter<boolean>();
  @Input() todoarrayChange: Todo[] = [];
  @Output() todoarray = new EventEmitter();


  constructor() { }
  ngOnInit(): void { }

  login(login: any) {
    const users = JSON.parse(localStorage?.getItem("users") as string) || [];
    let todos = JSON.parse(localStorage.getItem("todos") as string) || [];
    this.todoarrayChange = todos;
    console.log(users);
    password: Number;
    email: String;
    userId: Number;
    const email = login.value.email;
    const password = login.value.password;
    for (const user of users) {
      if (user.email == email && user.password == password) {
        this.userid = user.userId;
        this.userId.emit(this.userid);
        console.log(this.userid);
        this.showlog = false;
        this.showtodonew.emit(true);
        this.showlogChange.emit(false);
        console.log("user exest");
        const newArr = this.todoarrayChange?.filter((v: any, i: number) => v.userId == this.userid);
        console.log("this is a newarr", newArr);
        this.todoarray.emit(newArr);
        return;
      }
    }

    alert("User Name or Password is Incorrect");


  }

}
