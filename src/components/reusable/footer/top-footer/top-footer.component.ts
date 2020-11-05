import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.css']
})
export class TopFooterComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
  }

  goWhatsApp() {
    document.location.href = 'https://wa.me/201141087755'
  }

  goMail() {
    window.location.href = 'mailto:hossamxp33@gmail.com'
  }

}
