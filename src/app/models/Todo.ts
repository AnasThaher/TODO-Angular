export class Todo {
  userId:number;
  content: string;
  status:string;


  // status  = ["todo","progress","done"];
  constructor(content:string,status:string,userId:number){
    this.content = content;
    this.status = status;
    this.userId = userId;

  }

}

