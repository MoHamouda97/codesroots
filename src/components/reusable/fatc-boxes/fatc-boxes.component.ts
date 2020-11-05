import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fatc-boxes',
  templateUrl: './fatc-boxes.component.html',
  styleUrls: ['./fatc-boxes.component.css']
})
export class FatcBoxesComponent implements OnInit {
  @Input('facts') facts;
  
  constructor() { }

  ngOnInit(): void {
  }

}
