import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {
  // users: User[] =JSON.parse(localStorage?.getItem("users")||"")||[];;
  // showreg:boolean = true;
  static id: number = 1;

  @Output() showlog = new EventEmitter<boolean>();
  @Output() showregChange = new EventEmitter<boolean>();
  @Input() showreg: boolean | undefined;
  constructor() { }
  ngOnInit(): void {

  }

  creatUser(register: any) {
    const users = JSON.parse(localStorage.getItem("users") as string) || [];
    console.log(users);
    age: Number;
    gender: String;
    password: Number;
    email: String;
    userName: String;
    const userName = register.value.name;
    const email = register.value.email;
    const password = register.value.password;
    const gender = register.value.gender;
    const age = register.value.age;
    const newUser = new User(userName, email, gender, age, password, User.id);
    User.id++;
    // console.log(newUser);
    users.push(newUser);
    // console.log(this.users);
    this.showreg = false;
    this.showregChange.emit(false);
    this.showlog.emit(true);
    console.log("User ADDD");
    localStorage.setItem("users", JSON.stringify(users));

  }
  goTOLOgin() {
    this.showreg = false;
    this.showregChange.emit(false);
    this.showlog.emit(true);

  }
}
