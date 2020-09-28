import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Model, ToDoList } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model = new Model();
 isDisplay=false;
 getName(){
   return this.model.user;
 }
 getItems(){
   if(this.isDisplay)
   {return this.model.items;}
   return this.model.items.filter(item => !item.action);
 }
addItem(value){
  if(value!=''){
    this.model.items.push(new ToDoList(value,false));
  }
}
}
