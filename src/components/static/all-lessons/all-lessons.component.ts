import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/services/learning/learning.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-lessons',
  templateUrl: './all-lessons.component.html',
  styleUrls: ['./all-lessons.component.css']
})
export class AllLessonsComponent implements OnInit {
  title = 'دروس تعليمية';
  name;
  data;
  lessons;
  isLoading = true;
  isData = false; 

  constructor(private service: LearningService, private router: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.name = this.router.snapshot.paramMap.get("name");
    this.getRelatedLessons();
  }

  getRelatedLessons() {
    this.service.getRelatedLessons(this.name).subscribe(
      res => {
        this.data = res;
        this.lessons = this.data.allpost;

        this.isData = true;
        this.isLoading = false;        
      }
    )
  }

  setLessonIndex(i){
    localStorage.setItem('lessonIndex', i);
  }

}
