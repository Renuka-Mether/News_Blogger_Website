import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { BreakingNewsMarqueeComponent } from './breaking-news-marquee/breaking-news-marquee.component';
import { NewsBannerSliderComponent } from './news-banner-slider/news-banner-slider.component';
import { NewsTabDisplayComponent } from './news-tab-display/news-tab-display.component';
import { BreakingNewsSectionComponent } from './breaking-news-section/breaking-news-section.component';
import { StateNewsSectionComponent } from './state-news-section/state-news-section.component';
import { EntertainmentSliderSectionComponent } from './entertainment-slider-section/entertainment-slider-section.component';
// import { NewsListComponent } from './news-list/news-list.component';
// import { NewsViewComponent } from './news-view/news-view.component';
// import { AdvertiseWithUsComponent } from './advertise-with-us/advertise-with-us.component';
// import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
// import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { IndexComponent } from './index/index.component';
// import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    BreakingNewsMarqueeComponent,
    NewsBannerSliderComponent,
    NewsTabDisplayComponent,
    BreakingNewsSectionComponent,
    StateNewsSectionComponent,
    EntertainmentSliderSectionComponent,
    // IndexComponent,
    // AboutUsComponent,
    // NewsListComponent,
    // NewsViewComponent,
    // AdvertiseWithUsComponent,
    // WorkWithUsComponent,
    // PrivacyPolicyComponent,
    // ContactusComponent,
    // HomePageComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
