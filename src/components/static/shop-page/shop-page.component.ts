import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/services/home/home.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  title = 'المتجر الالكتروني المتكامل';
  facts = [
    {icon: "./../../../assets/images/android.png", title: "تصميم تطبيقات android", content: "نقوم ببرمجة تطبيقات الاندرويد باستخدام اللغات الnative kotlin ,باستخدام احدث التكنولجيات لضمان جودة وسلاسة في التعامل مع التطبيق وامكانية تطويره بكل سهوله"},
    {icon: "./../../../assets/images/apple.png", title: "تصميم تطبيقات IOS", content: "نقوم ببرمجة تطبيقات الايفون باستخدام اللغات الnative swift ,باستخدام احدث التكنولجيات لضمان جودة وسلاسة في التعامل مع التطبيق وامكانية تطويره بكل سهوله"},
    {icon: "./../../../assets/images/online-shop.png", title: "تصميم متجر الكتروني", content: "نقوم ببرمجة المتاجر الالكترونية باستخدام لغة  PHP واطار عمل انجولار ,باستخدام احدث التكنولجيات لضمان جودة وسلاسة في التعامل مع المتجر وامكانية تطويره بكل سهوله"}
  ];
  isLoading = true;
  isData = false;  
  isCustom = true;
  data;
  slides;
  works;

  constructor(private service: HomeService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.getWorks();
  }

  getWorks() {
    this.service.getMarketWorks().subscribe(
      res => {
        this.data = res;
        this.works = this.data.andorid;  

        this.isLoading = false;
        this.isData = true;
      }
    )
  }  

}
