import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shop-work',
  templateUrl: './shop-work.component.html',
  styleUrls: ['./shop-work.component.css']
})
export class ShopWorkComponent implements OnInit {
  @Input('works') works;
  isVisible = true;
  isData = false;
  
  slideConfig = {
    speed: 300,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.carousel-desc',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]    
  };
  
  slideConfigDesc = {
    speed: 300,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    asNavFor: '.carousel',
    arrows: false
  }; 

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isData = true;
    },1000)    
  }

  setIndex(i) {
    localStorage.setItem('projectIndex', i);
  }   

}
