import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-advertise-with-us',
  templateUrl: './advertise-with-us.component.html',
  styleUrls: ['./advertise-with-us.component.css']
})
export class AdvertiseWithUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions5: OwlOptions  = {
    loop:true,
    margin:10,
    items:1,
    dots: false,
    nav:true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    // navContainer: '.news_ad_display_container .custom-nav',
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:1
    //     },
    //     1000:{
    //         items:1
    //     }
    // }

    }
}