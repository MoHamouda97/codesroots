import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cars-app',
  templateUrl: './cars-app.component.html',
  styleUrls: ['./cars-app.component.css']
})
export class CarsAppComponent implements OnInit {
  title = 'برنامج السيارات';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
