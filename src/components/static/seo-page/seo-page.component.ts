import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo-page',
  templateUrl: './seo-page.component.html',
  styleUrls: ['./seo-page.component.css']
})
export class SeoPageComponent implements OnInit {
  facts = [
    {icon: "./../../../assets/images/search-engine-optimization.png", title: "السعي لمحركات البحث", content: "ننشر موقعك يدوياً في محركات البحث المختلف، ضماناً لأن يأرشف محرك البحث محتوي موقعك كاملاً."},
    {icon: "./../../../assets/images/ok.png", title: "احترافية عالية فى العمل", content: "خبره عالية فى ادارة موقعك وارشفته وفقاً لمعايير جوجل حتى لا يتعرض للطرد"},
    {icon: "./../../../assets/images/stats.png", title: "سرعة تجاوب", content: "سرعة فى العمل ومتابعة النتائج وتسليم التقارير الدورية لحالة موقعك"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
