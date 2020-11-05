import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mobile-work',
  templateUrl: './mobile-work.component.html',
  styleUrls: ['./mobile-work.component.css']
})
export class MobileWorkComponent implements OnInit {
  @Input('works') works;
  constructor() { }

  ngOnInit(): void {
  }

}
