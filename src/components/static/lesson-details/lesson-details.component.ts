import { Component, OnInit } from '@angular/core';
import { LearningService } from 'src/services/learning/learning.service';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {
  name;
  index;
  data;
  lessons;
  lesson;
  isLoading = true;
  isData = false; 

  constructor(private service: LearningService, private router: ActivatedRoute, private message: NzMessageService) { }

  ngOnInit(): void {
    this.name = this.router.snapshot.paramMap.get("name");
    this.index = parseInt(localStorage.getItem("lessonIndex"));

    this.getRelatedLessons();
  }

  getRelatedLessons() {
    this.service.getRelatedLessons(this.name).subscribe(
      res => {
        this.data = res;
        this.lessons = this.data.allpost;
        this.lesson = this.lessons[this.index];
        console.log(this.lesson);
        this.isData = true;
        this.isLoading = false;        
      }
    )
  }
  
  getLessonNameExceptFirstIndex() {
    if (this.index == 0) {
      return "لا توجد دروس سابقة"
    }

    return this.lessons[this.index - 1].name;
  }

  getLessonNameExceptLastIndex() {
    if (this.index == this.lessons.length - 1) {
      return "لا توجد دروس جديدة"
    }

    return this.lessons[this.index + 1].name;    
  }

  showNextLesson() {
    if (this.index == this.lessons.length) {
      this.message.warning("لا توجد دروس جديدة") ;
    } else {
      this.lesson = this.lessons[this.index + 1];
      this.index += 1;
    }

  }

  showPrevLesson() {
    if (this.index == 0) {
      this.message.warning("لا توجد دروس سابقة")
    } else {
      this.lesson = this.lessons[this.index - 1];
      this.index -= 1;
    }
  }  

}
