export class User {
  static id: number = 1;
  userId: number;
  userName: string;
  email: string;
  password: number;
  gender: string;
  age: number;

  constructor(userName: string, email: string, gender: string, age: number, password: number,id:number) {
    this.userName = userName;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.password = password;
    this.userId = id;
  }



}
