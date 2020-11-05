import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.statCounter();
  }

  statCounter() {
    $('#js_counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      },{
        duration: 1000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      })
    })
  }

}
