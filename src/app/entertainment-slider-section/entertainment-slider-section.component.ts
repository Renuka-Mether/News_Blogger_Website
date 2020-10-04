import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-entertainment-slider-section',
  templateUrl: './entertainment-slider-section.component.html',
  styleUrls: ['./entertainment-slider-section.component.css']
})
export class EntertainmentSliderSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions1: OwlOptions  = {
    loop:true,
    margin:10,
    items:3,
    autoplay: true,
    autoplayTimeout : 5000,
    dots: true,
    nav: false,
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
