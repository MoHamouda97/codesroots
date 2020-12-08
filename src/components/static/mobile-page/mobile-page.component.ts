import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-page',
  templateUrl: './mobile-page.component.html',
  styleUrls: ['./mobile-page.component.css']
})
export class MobilePageComponent implements OnInit {
  facts = [
    {icon: "./../../../assets/images/android.png", title: "تصميم تطبيقات android", content: "نستطيع تحويل فكرتك لتطبيق يعمل علي بيئة عمل Android، بدءاً من التخطيط والتصميم والتنفيذ، نضمن تطبيق يستطيع المنافسة في متجر تطبيقات Google Android Market."},
    {icon: "./../../../assets/images/apple.png", title: "تصميم تطبيقات IOS", content: "هل لديك فكرة تطبيق ترغب في تنفيذة علي بيئة تشغيل IOS ؟ codesroots يمكن أن تساعد في تطوير فكرتك إلى تطبيق فعلي سيساعدك علي مواجهة منافسيك بقوة، سنجعلك فى القمة !"},
    {icon: "./../../../assets/images/game-controller.png", title: "برمجة الالعاب والتطبيقات الربحية", content: "توفر codesroots أفكار جديدة ربحية فى مجال الربح من تطبيقات الهواتف الذكية . يمكنكم التواصل معنا لتحديد ومعرفة الافكار المتوفرة لدينا ."}
  ];
  isLoading = true;
  isData = false;  
  isCustom = true;
  data;
  slides;
  works;
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks() {
    this.service.getWorks().subscribe(
      res => {
        this.data = res;
        this.works = this.data.andorid;  

        this.isLoading = false;
        this.isData = true;
      }
    )
  }

}
