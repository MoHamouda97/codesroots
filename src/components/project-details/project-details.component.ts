import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home/home.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  isLoading = true;
  isData = false;  
  data;  
  work;
  fullDescription;

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getWork();
  }

  getWork() {
    var index = localStorage.getItem('projectIndex');
    this.service.getWorks().subscribe(
      res => {
        this.data = res;
        this.work = this.data.andorid[index];  

        this.fullDescription = this.work.full_desc;

        setTimeout(() => {
          $('#js_full_description').html(this.fullDescription);
        }, 10);        

        this.isLoading = false;
        this.isData = true;
      }
    )   
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }  

}
