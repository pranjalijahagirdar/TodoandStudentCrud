import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from './model/student';
import { studentArr } from './const/student.data';
import { UuidService } from './service/uuid.service';
import { SnackbarService } from './service/snackbar.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
@ViewChild('fnameRef')fnameRef!:ElementRef;
@ViewChild('lnameRef')lnameRef!:ElementRef;
@ViewChild('emailRef')emailRef!:ElementRef;
@ViewChild('contactRef')contactRef!:ElementRef;
@ViewChild('isActiveRef')isActiveRef!:ElementRef;
@ViewChild('courseRef')courseRef!:ElementRef;
@ViewChild('cityRef')cityRef!:ElementRef;
@ViewChild('ageRef')ageRef!:ElementRef;
studentArr : Array<Istd> = studentArr;
isInEditMode : boolean = false
editStdId!:string;
  constructor(
    private _uuidService : UuidService,
    private _snackBarServie : SnackbarService
  ) { }
  ngOnInit(): void {
  }

  trackByStdId(index : number, std:Istd){
    return std.id;
  }

  onAddStd(){
    let newStd : Istd={
      fname:this.fnameRef.nativeElement.value,
      lname:this.lnameRef.nativeElement.value,
      email:this.emailRef.nativeElement.value,
      contact:this.contactRef.nativeElement.value,
      isActive:this.isActiveRef.nativeElement.value==='true',
      course:this.courseRef.nativeElement.value,
      city:this.cityRef.nativeElement.value,
      age:Number(this.ageRef.nativeElement.value),
      id:this._uuidService.getUuid()
    }
    this.studentArr.unshift(newStd)
    this.fnameRef.nativeElement.value = '';
    this.lnameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.contactRef.nativeElement.value = '';
    this.isActiveRef.nativeElement.value = 'true';
    this.courseRef.nativeElement.value = '';
    this.cityRef.nativeElement.value = '';
    Number(this.ageRef.nativeElement.value = '');
    this._snackBarServie.openSnackbar('Student added successfully !!!');
  }

  onUpdateStd(){
    let UpdateStd:Istd={
      fname:this.fnameRef.nativeElement.value,
      lname:this.lnameRef.nativeElement.value,
      email:this.emailRef.nativeElement.value,
      contact:this.contactRef.nativeElement.value,
      isActive:this.isActiveRef.nativeElement.value === 'true',
      course:this.courseRef.nativeElement.value,
      city:this.cityRef.nativeElement.value,
      age:Number(this.ageRef.nativeElement.value),
      id:this.editStdId
    }

    let getIndex = this.studentArr.findIndex(d=>d.id===this.editStdId);
    this.studentArr[getIndex]=UpdateStd;
    this.fnameRef.nativeElement.value = ''
    this.lnameRef.nativeElement.value = ''
    this.emailRef.nativeElement.value = ''
    this.contactRef.nativeElement.value = ''
    this.isActiveRef.nativeElement.value = 'true'
    this.courseRef.nativeElement.value = ''
    this.cityRef.nativeElement.value = ''
    +(this.ageRef.nativeElement.value = '')
    this.isInEditMode = false;
    this.editStdId='';
    this._snackBarServie.openSnackbar('Student updated successfully !!!');
  }

  onEditStd(std : Istd){
    this.isInEditMode = true;
    this.editStdId = std.id;
    console.log(std.id);
    this.fnameRef.nativeElement.value = std.fname;
    this.lnameRef.nativeElement.value = std.lname;
    this.emailRef.nativeElement.value = std.email;
    this.contactRef.nativeElement.value = std.contact;
    this.isActiveRef.nativeElement.value = std.isActive ? 'true':'false';
    this.courseRef.nativeElement.value = std.course;
    this.cityRef.nativeElement.value = std.city;
    +(this.ageRef.nativeElement.value = std.age);
  }

  onRemoveStd(std : Istd){
    let Confirm = confirm(`Are you sure you want to remove with ${std.id}`);
    console.log(std.id);
    if(Confirm){
      let getIndex = this.studentArr.findIndex(h=>h.id===std.id);
      this.studentArr.splice(getIndex, 1);
      if(this.editStdId === std.id){
        this.isInEditMode = false;
        this.editStdId='';
      }
      this.fnameRef.nativeElement.value = ''
      this.lnameRef.nativeElement.value = ''
      this.emailRef.nativeElement.value = ''
      this.contactRef.nativeElement.value = ''
      this.isActiveRef.nativeElement.value = 'true'
      this.courseRef.nativeElement.value = ''
      this.cityRef.nativeElement.value = ''
      +(this.ageRef.nativeElement.value = '')
      this._snackBarServie.openSnackbar('Student remove successfully !!!')
    }
  }
}
