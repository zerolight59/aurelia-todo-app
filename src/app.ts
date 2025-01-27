import { Todo } from "todo";
export class App {
  todo:Todo;
  message:string;
  constructor(){
    this.message = 'Hello Manu!';
    this.todo=new Todo("clean the room");
  }
}
