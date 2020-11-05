import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  @Input('packages') packages;

  constructor() { }

  ngOnInit(): void {
    console.log(this.packages)
  }

}
