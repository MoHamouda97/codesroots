import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-page',
  templateUrl: './marketing-page.component.html',
  styleUrls: ['./marketing-page.component.css']
})
export class MarketingPageComponent implements OnInit {
  facts = [
    {icon: "./../../../assets/images/target.png", title: "استهداف كامل", content: "ليس مجرد اي زائر، بل حدد نوع وبلد وجنس الزائر."},
    {icon: "./../../../assets/images/ok.png", title: "ادارة ومتابعة", content: "ادارة ذكية ومتابعة لاحصائيات الحملة دوريا."},
    {icon: "./../../../assets/images/stadistics.png", title: "نتائج مذهلة", content: "زيادة المبيعات وشهرة العلامة التجارية."}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
