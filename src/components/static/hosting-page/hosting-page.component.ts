import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting-page',
  templateUrl: './hosting-page.component.html',
  styleUrls: ['./hosting-page.component.css']
})
export class HostingPageComponent implements OnInit {
  facts = [
    {icon: "./../../../assets/images/headphones.png", title: "متابعة مستمرة", content: "متابعة مستمرة لاداء موقعك والاستضافه لضمان عدم التوقف فى اى وقت"},
    {icon: "./../../../assets/images/badge.png", title: "الحماية والأمان", content: "تتمتع سيرفراتنا بنظام امان عال المستوى يضمن عملها دون توقف مع وجود برامج حماية توقف أي محاولة للاختراق أو الهجمات"},
    {icon: "./../../../assets/images/backup-copy.png", title: "نسخ احتياطي", content: "تقوم بعمل باك أب يومي واسبوعي وشهري اضافه لنسخة علي هارد ديسك خارجي حفاظا علي الموقع"}
  ];

  packages = [
    {title: "خطة", subtitle: "المواقع الصغيرة", offers: []},
    {title: "خطة", subtitle: "مواقع الشركات", offers: [
      {title: "الخطة الاكثر طلباً"},
      {title: "مساحة الاستضافة 3 جيجا"},
      {title: "سعة الباندويث / 60 جيجابايت شهرياً"},
      {title: "لوحة التحكم / سي بنل عربية و انكليزية"},
      {title: "عدد قواعد البيانات / عدد لانهائي"},
      {title: "بريد الكتروني / عدد لا نهائي"}            
    ]},
    {title: "خطة", subtitle: "المواقع الكبيرة", offers: []} 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
