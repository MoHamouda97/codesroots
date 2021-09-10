import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LearningService } from './../../../services/learning/learning.service';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.css']
})
export class LearningPageComponent implements OnInit {
  title = 'دروس تعليمية';
  data;
  lessons;
  isLoading = true;
  isData = false; 
  constructor(private service: LearningService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
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
