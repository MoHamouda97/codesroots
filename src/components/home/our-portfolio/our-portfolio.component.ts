import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.css']
})
export class OurPortfolioComponent implements OnInit {
  @Input('works') works;
  
  constructor() { }

  ngOnInit(): void {
  }

}
