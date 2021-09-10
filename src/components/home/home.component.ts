import { HomeService } from './../../services/home/home.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'الصفحة الرئيسية';
  data;
  slides;
  works;
  isLoading = true;
  isData = false;
  constructor(private service: HomeService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.getDate();
  }

  getDate() {
    this.service.getSlides().subscribe(
      res => {
        this.data = res;
        this.slides = this.data.data;
        
        this.service.getWorks().subscribe(
          res => {
            this.data = res;
            this.works = this.data.andorid;  

            this.isLoading = false;
            this.isData = true;
          }
        )
      }
    )
  }

}
