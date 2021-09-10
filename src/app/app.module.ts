import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';

// Ant D
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// Mat Module
import {MatRippleModule} from '@angular/material/core';

// Owl
import { CarouselModule } from 'ngx-owl-carousel-o';

// Slick
import { SlickCarouselModule } from 'ngx-slick-carousel';

// App Components
import { HomeComponent } from 'src/components/home/home.component';
import { HomeSliderComponent } from 'src/components/home/home-slider/home-slider.component';
import { CompVideoComponent } from 'src/components/home/comp-video/comp-video.component';
import { AboutSectionComponent } from 'src/components/home/about-section/about-section.component';
import { OurPortfolioComponent } from 'src/components/home/our-portfolio/our-portfolio.component';
import { OurServicesComponent } from 'src/components/home/our-services/our-services.component';
import { OurOffersComponent } from 'src/components/home/our-offers/our-offers.component';
import { OurClientsComponent } from 'src/components/home/our-clients/our-clients.component';
import { ProjectDetailsComponent } from 'src/components/project-details/project-details.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { ContactPhoneComponent } from 'src/components/contact/contact-phone/contact-phone.component';
import { ContactFormComponent } from 'src/components/contact/contact-form/contact-form.component';

// Static Components
import { SupportPageComponent } from 'src/components/static/support-page/support-page.component';
import { SeoPageComponent } from 'src/components/static/seo-page/seo-page.component';
import { SeoServiceComponent } from 'src/components/static/seo-page/seo-service/seo-service.component';
import { WhatIsSeoComponent } from 'src/components/static/seo-page/what-is-seo/what-is-seo.component';
import { CodesrootsSeoFeaturesComponent } from 'src/components/static/seo-page/codesroots-seo-features/codesroots-seo-features.component';
import { HostingPageComponent } from 'src/components/static/hosting-page/hosting-page.component';
import { WebPageComponent } from 'src/components/static/web-page/web-page.component';
import { WebDesignSectionComponent } from 'src/components/static/web-page/web-design-section/web-design-section.component';
import { WhyCodesrootsComponent } from 'src/components/static/web-page/why-codesroots/why-codesroots.component';
import { MarketingPageComponent } from 'src/components/static/marketing-page/marketing-page.component';
import { MarketingServiceComponent } from 'src/components/static/marketing-page/marketing-service/marketing-service.component';
import { AdsSectionComponent } from 'src/components/static/marketing-page/ads-section/ads-section.component';
import { MarketingWhyCodesrootsComponent } from 'src/components/static/marketing-page/marketing-why-codesroots/marketing-why-codesroots.component';
import { CarsAppComponent } from 'src/components/static/cars-app/cars-app.component';
import { DesktopPageComponent } from 'src/components/static/desktop-page/desktop-page.component';
import { DesktopIntroComponent } from 'src/components/static/desktop-page/desktop-intro/desktop-intro.component';
import { DesktopInfoComponent } from 'src/components/static/desktop-page/desktop-info/desktop-info.component';
import { DesktopCodesrootsComponent } from 'src/components/static/desktop-page/desktop-codesroots/desktop-codesroots.component';
import { MobilePageComponent } from 'src/components/static/mobile-page/mobile-page.component';
import { MobileIntroComponent } from 'src/components/static/mobile-page/mobile-intro/mobile-intro.component';
import { MobileCodesrootsComponent } from 'src/components/static/mobile-page/mobile-codesroots/mobile-codesroots.component';
import { MobileWorkComponent } from 'src/components/static/mobile-page/mobile-work/mobile-work.component';
import { ShopPageComponent } from 'src/components/static/shop-page/shop-page.component';
import { ShopCodesrootsComponent } from 'src/components/static/shop-page/shop-codesroots/shop-codesroots.component';
import { ShopIntroComponent } from 'src/components/static/shop-page/shop-intro/shop-intro.component';
import { ShopWorkComponent } from 'src/components/static/shop-page/shop-work/shop-work.component';
import { LearningPageComponent } from 'src/components/static/learning-page/learning-page.component';
import { LearningIntroComponent } from 'src/components/static/learning-page/learning-intro/learning-intro.component';
import { AllLessonsComponent } from 'src/components/static/all-lessons/all-lessons.component';
import { LessonDetailsComponent } from 'src/components/static/lesson-details/lesson-details.component';

// App Reusable Components
import { NavComponent } from 'src/components/reusable/nav/nav.component';
import { TopNavComponent } from 'src/components/reusable/nav/top-nav/top-nav.component';
import { MainNavComponent } from 'src/components/reusable/nav/main-nav/main-nav.component';
import { SocilMediaComponent } from 'src/components/reusable/socil-media/socil-media.component';
import { FooterComponent } from 'src/components/reusable/footer/footer.component';
import { TopFooterComponent } from 'src/components/reusable/footer/top-footer/top-footer.component';
import { MainFooterComponent } from 'src/components/reusable/footer/main-footer/main-footer.component';
import { BottomFooterComponent } from 'src/components/reusable/footer/bottom-footer/bottom-footer.component';
import { LoaderComponent } from 'src/components/reusable/loader/loader.component';
import { FatcBoxesComponent } from 'src/components/reusable/fatc-boxes/fatc-boxes.component';
import { PackagesComponent } from 'src/components/reusable/packages/packages.component';

// App Services
import { HomeService } from 'src/services/home/home.service';
import { ContactService } from 'src/services/contact/contact.service';
import { LearningService } from 'src/services/learning/learning.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopNavComponent,
    MainNavComponent,
    SocilMediaComponent,
    HomeComponent,
    HomeSliderComponent,
    CompVideoComponent,
    AboutSectionComponent,
    OurPortfolioComponent,
    OurServicesComponent,
    OurOffersComponent,
    OurClientsComponent,
    ProjectDetailsComponent,
    ContactComponent,
    ContactPhoneComponent,
    ContactFormComponent,
    FooterComponent,
    TopFooterComponent,
    MainFooterComponent,
    BottomFooterComponent,
    LoaderComponent,
    FatcBoxesComponent,
    PackagesComponent,
    SupportPageComponent,
    SeoPageComponent,
    SeoServiceComponent,
    WhatIsSeoComponent,
    CodesrootsSeoFeaturesComponent,
    HostingPageComponent,
    WebPageComponent,
    WebDesignSectionComponent,
    WhyCodesrootsComponent,
    MarketingPageComponent,
    MarketingServiceComponent,
    AdsSectionComponent,
    MarketingWhyCodesrootsComponent,
    CarsAppComponent,
    DesktopPageComponent,
    DesktopIntroComponent,
    DesktopInfoComponent,
    DesktopCodesrootsComponent,
    MobilePageComponent,
    MobileIntroComponent,
    MobileCodesrootsComponent,
    MobileWorkComponent,
    ShopPageComponent,
    ShopCodesrootsComponent,
    ShopIntroComponent,
    ShopWorkComponent,
    LearningPageComponent,
    LearningIntroComponent,
    AllLessonsComponent,
    LessonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzToolTipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRippleModule,
    BrowserAnimationsModule,
    CarouselModule,
    SlickCarouselModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'دروس-تعليمية',
        component: LearningPageComponent
      },
      {
        path: 'posts/viewpost/:name',
        component: AllLessonsComponent
      },
      {
        path: 'posts/viewpost/details/:name',
        component: LessonDetailsComponent
      },                   
      {
        path: 'تفاصيل',
        component: ProjectDetailsComponent
      },       
      {
        path: 'الدعم-الفني',
        component: SupportPageComponent
      }, 
      {
        path: 'ارشفة-مواقع',
        component: SeoPageComponent
      },
      {
        path: 'استضافة-مواقع',
        component: HostingPageComponent
      },
      {
        path: 'تصميم-مواقع',
        component: WebPageComponent
      },
      {
        path: 'تسويق-الكتروني',
        component: MarketingPageComponent
      },
      {
        path: 'برنامج ادارة السيارات المؤجرة',
        component: CarsAppComponent
      },
      {
        path: 'تصميم-برمجة-برامج',
        component: DesktopPageComponent
      },
      {
        path: 'تصميم-برمجة--تطبيقات-الموبايل',
        component: MobilePageComponent
      },
      {
        path: 'المتجر-الالكتروني-المتكامل',
        component: ShopPageComponent
      },      
      {
        path: 'تواصل-معنا',
        component: ContactComponent
      },                                                               
    ])   
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    HomeService,
    ContactService,
    LearningService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
