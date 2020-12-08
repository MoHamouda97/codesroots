import { Component, OnInit } from '@angular/core';
import { LearningService } from './../../../services/learning/learning.service';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.css']
})
export class LearningPageComponent implements OnInit {
  data;
  lessons;
  isLoading = true;
  isData = false; 
  constructor(private service: LearningService) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons() {
    this.service.getLessons().subscribe(
      res => {
        this.data = res;
        this.lessons = this.data.posts;

        this.isData = true;
        this.isLoading = false;
      }
    )
  }

}
