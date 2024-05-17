import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

interface Student {
  id: number;
  name: string;
  age: number;
  major: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  studentForm: FormGroup;

  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [''],
      age: [''],
      major: ['']
    });
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  addStudent(): void {
    const newStudent: Student = this.studentForm.value;
    this.studentService.addStudent(newStudent).subscribe(student => {
      this.students.push(student);
      this.studentForm.reset();
    });
  }
}
