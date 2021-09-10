import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.css']
})
export class WebPageComponent implements OnInit {
  title = 'تصميم المواقع';
  facts = [
    {icon: "./../../../assets/images/imagination.png", title: "تخيل ونحن ننفذ", content: "فريق كودس روتس لايقف شئ امامة فلا يوجد لدينا مستحيل او حدود لنحقق ما في خيالك, كل هذا نتاج سنوات من الخبرة نضعها بين يديك لتنفيذ مشروعك البرمجي"},
    {icon: "./../../../assets/images/shield.png", title: "برمجيات خالية من الثغرات", content: "نحرص دائما علي اعتماد التقنيات الحديثه في تأمين وحماية ملفات البرمجيات التي نقدمها ونتأكد من خلوها من الثغرات حرصا منا علي مواقع العملاء, فنحن نختبر البرمجيات جيداً قبل اطلاقها"},
    {icon: "./../../../assets/images/ok.png", title: "مقترحات مستقبلية", content: "نحرص دائما علي تقديم مقترحات هامة ومستقبلية لمشروعك البرمجي تزيد من النتائج المطلوبة للمشروعات البرمجية بمختلف المجالات, فنجاح مشروعك البرمجي هوا نجاح لنا"}
  ];
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
