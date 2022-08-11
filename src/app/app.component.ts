import { Todo } from './models/Todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userid: any;
  title = 'ToDo-app';
  showlog: boolean = false;
  showtodo: boolean =false;
  sowreg: boolean = true;
  todos:Todo[]=[]
  // todos:Todo[] =[{
  //   content:"app component first",
  //   status:"fill",
  //   userId:2
  // }]
  // constructor(){
  //  this.todos = JSON.parse(localStorage.getItem("todos")as string)|| [];

  //   console.log("from App todos",this.todos);
  //   console.log("from App arr",this.arr)


  // }

  arr:Todo[] =[
    {
    content:"app component first",
    status:"fill",
    userId:2
  },{
    content:"app component second",
    status:"fill",
    userId:1
  }, {
    content:"app component first",
    status:"fill",
    userId:1
  }, {
    content:"app component first",
    status:"fill",
    userId:2
  }
]
  userLogin(event: any) {
    this.userid = event;
    // console.log("this user id from parent", event);
  }

  showlogin(showlog: boolean) {
    this.showlog = showlog;
  }
  showtodos(showtodos: boolean) {
    this.showtodo = showtodos;
  }
  userregi(showr: boolean) {
    this.sowreg = showr;
  }
  shangeshowReg(statu:boolean){
    this.sowreg  = statu;
  }
  logstatus(statu:boolean){
    this.showlog = statu;
  }
  todostatus(statu:boolean){
    this.showtodo = statu;
  }
  userIdChange(id:number){
    this.userid=id;
  }
  // changetodo(tod:any){
  //   this.todos=tod;
  // }
  changetodoarrat(arr:any){
    this.todos = arr;
  }
}
