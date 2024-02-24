import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratical_3';
  Name = 'Aditya Pithva';
  onclick(){
    this.Name = 'C U Shah Polytechnic';
    console.log("Data submitted successfully");
  }
}
