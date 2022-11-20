import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  courses!: { id: number; name: string; }[];

 loadCourses(){
  this.courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    ];
 }

 trackCourse(index:number,course: { id: any; }){
  return course ? course.id : undefined;
 }
  

  
  // onAdd(){
  //   this.courses.push({id:4,name:'course4'});
  // }
  // onRemove(course: { id: number; name: string; }){
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index,1);
  // }
  // onChange(course: { id: number; name: string; }){
  //   course.name = "UPDATED";
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
