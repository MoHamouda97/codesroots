import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'comp-video',
  templateUrl: './comp-video.component.html',
  styleUrls: ['./comp-video.component.css']
})
export class CompVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeVideo() {
    $('#js_video_close').click(function () {
      $('#js_video_wrapper').fadeOut();
    });
  }

}
