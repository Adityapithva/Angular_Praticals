import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  template: `
    <h2>Data from Backend</h2>
    <p>{{ data?.message }}</p>
  `
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/data').subscribe(response => {
      this.data = response;
    });
  }
}
