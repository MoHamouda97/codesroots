import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'الصفحة الرئيسية';

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        $("html, body").animate({ scrollTop: 0 }, 100);
    });
  }  
}
