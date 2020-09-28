
export class Model{
    user;
    items;
    constructor(){
            this.user= "Nina";
            this.items= [
               new ToDoList("Sports",true),
               new ToDoList("Painting",false),
               new ToDoList("Chess",false),
               new ToDoList("Cinema",false),
               
              ];
    }
}
export class ToDoList{
    description;
    action;
    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}