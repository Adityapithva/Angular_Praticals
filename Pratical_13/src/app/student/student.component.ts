import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student | undefined;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = this.studentService.getStudent();
  }
}
