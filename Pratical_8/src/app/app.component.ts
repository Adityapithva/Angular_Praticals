import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratical_8';
  student = new Student();

  onSubmit() {
    // Handle form submission logic (e.g., send data to server)
    console.log("Student Registration Submitted:", this.student);
  }
  class Student{
      firstName: string = '';
      lastName: string = '';
      email : string = '';
      phoneNumber : string = '';
    }
}
