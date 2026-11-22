import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodos } from './model/todo';
import { TodosArr } from './const/todo.data';
import { UuidService } from './service/uuid.service';
import { SnackbarService } from './service/snackbar.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
@ViewChild('todoRef')todoRef!:ElementRef;
@ViewChild('isCompletedRef')isCompletedRef!:ElementRef
TodosArr : Array<Itodos>=TodosArr;
isInEditMode : boolean = false;
updateId : string | null = null
  constructor(
    private snackbar:SnackbarService,
    private uuid:UuidService
  ) { }

  ngOnInit(): void {
  }

//create 

onTodoAdd(){
  let todo:Itodos={
    title:this.todoRef.nativeElement.value,
    id:this.uuid.getUuid(),
    isCompleted:this.isCompletedRef.nativeElement.value==='yes'
  }
  this.TodosArr.unshift(todo);
  this.todoRef.nativeElement.value='';
  this.isCompletedRef.nativeElement.value='yes';
  this.snackbar.openSnackbar('New todo created successfully !!!');
}

//Delete

onTodoRemove(id:string){
  console.log(id);
  let confirmation = confirm(`Are you sure you want to remove this todo with id ${id}`);
  if(confirmation){
    let getIndex = this.TodosArr.findIndex(todo=>todo.id===id);
    this.TodosArr.splice(getIndex, 1);
    this.snackbar.openSnackbar('todo Removed successfully !!!');
  }
}
//Edit

onTodoEdit(todo:Itodos){
  let editObj=this.TodosArr.find(p=>p.id===todo.id)
  this.todoRef.nativeElement.value=editObj!.title;
  this.isCompletedRef.nativeElement.value=editObj!.isCompleted?'yes':'no';
  this.isInEditMode=true;
  this.updateId=todo.id;

}

//Update

onUpdateTodo(){
  let updateObj : Itodos={
    title:this.todoRef.nativeElement.value,
    isCompleted:this.isCompletedRef.nativeElement.value==='yes'? true : false,
    id:this.updateId!
  }
  let getIndex = this.TodosArr.findIndex(p=>p.id===this.updateId)
  this.TodosArr[getIndex]=updateObj;
  this.snackbar.openSnackbar('todo updated successfully !!!');
  this.todoRef.nativeElement.value = '';
  this.isCompletedRef.nativeElement.value = 'yes';
  this.isInEditMode=false;
  this.updateId=null;
}


onChange(todo:Itodos){
  todo.isCompleted = !todo.isCompleted;
  if(todo.isCompleted){
    this.snackbar.openSnackbar('Todo completed successfully !!!');
  }
  else{
    this.snackbar.openSnackbar('Todo Is Not Completed !!!')
  }
}
}
