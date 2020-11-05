import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.css']
})
export class SupportPageComponent implements OnInit {

  facts = [
    {icon: "./../../../assets/images/lamp.png", title: "افكار و حلول", content: "نقدم لك افكار و نساعدك ان تبدأ موقعك الاحترافى و نتابعك باستمرار ليمكننا تنفيذ كافه الطلبات الخاصه بالعملاء .."},
    {icon: "./../../../assets/images/badge.png", title: "حمايه حقيقيه", content: "نقدم لك نظام حمايه حقيقي وقوى لموقعك حيث اننا نعمل على فحص الموقع و عمل حمايه جيده له لمزيد من الامان لموقعك ."},
    {icon: "./../../../assets/images/shield.png", title: "الكفاءه", content: "نهتم بكل التفاصيل لاتمام العمليه بصورة دقيقه و سهله .."}
  ];

  packages = [
    {title: "الدعم الفني", subtitle: "المنتديات", offers: []},
    {title: "الدعم الفني", subtitle: "الوردبريس", offers: [
      {title: "تركيب سكربت الووردبريس اخر اصدار"},
      {title: "تحديث اصدار الووردبريس الى اخر اصدار موجود"},
      {title: "حمايه الووردبريس وحل المشاكل الموجوده بالقالب"},
      {title: "اعداد صحيح للوردبريس وتهيئة الموقع للعمل بشكل صحيح"},
      {title: "تركيب اى عدد من الاضافات اللازمه"},
      {title: "تركيب قالب متوافق مع الجوال والتابلت"}            
    ]},
    {title: "الدعم الفني", subtitle: "الاسكربتات", offers: []} 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
