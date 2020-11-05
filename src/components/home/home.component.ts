import { HomeService } from './../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  slides;
  works;
  isLoading = true;
  isData = false;
  constructor(private service: HomeService) { }

  ngOnInit(): void {
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
            this.works = this.data.data;  

            this.isLoading = false;
            this.isData = true;
          }
        )
      }
    )
  }

}
