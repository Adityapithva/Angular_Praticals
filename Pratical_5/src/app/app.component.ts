import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratical_5';
  studentDetails:any = [
    {Enroll:1,Name:'Aditya',Grade:'A'},
    {Enroll:4,Name:'Bhargav',Grade:'A'},
    {Enroll:18,Name:'Lodo',Grade:'F'},
    {Enroll:38,Name:'Darshan',Grade:'H'},
    {Enroll:65,Name:'Manthan',Grade:'A'},
  ];
}
