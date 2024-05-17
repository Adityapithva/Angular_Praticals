import { Injectable } from '@angular/core';
export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private student: Student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    grade: 'A'
  };
  getStudent(): Student {
    return this.student;
  }
}
