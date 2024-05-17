import { Component, OnInit } from '@angular/core';
class Student {
  constructor(public firstName: string, public lastName: string, public age: number) {}
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'] 
})
export class StudentComponent implements OnInit {
  title: string = 'Student Records';
  studentCount: number = 0;
  students: Student[] = [];

  ngOnInit() {
    this.students.push(new Student("Aditya", "Pithva", 17));
    this.students.push(new Student("Bhargav", "Bhatt", 17));
    this.students.push(new Student("Darshan", "Jadav", 17));
    this.studentCount = this.students.length;
  }

  updateTable() {
    const currentCount = this.students.length;
    if (this.studentCount > currentCount) {
      for (let i = currentCount; i < this.studentCount; i++) {
        this.students.push(new Student("", "", 0));
      }
    }else if(this.studentCount < currentCount){
      this.students.splice(this.studentCount);
    }
  }
  removeStudent(index:number){
    this.students.splice(index, 2);
  }
}
