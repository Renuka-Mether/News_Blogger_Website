import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import your component here then call below
// import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { AdvertiseWithUsComponent } from './advertise-with-us/advertise-with-us.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsViewComponent } from './news-view/news-view.component';
// call component below for routing
const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'privacy_policy', component: PrivacyPolicyComponent},
  { path: 'work_with_us', component: WorkWithUsComponent},
  { path: 'advertise_with_us', component: AdvertiseWithUsComponent},
  { path: 'news_list', component: NewsListComponent},
  { path: 'news_view', component: NewsViewComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export routing components here and import app routing on app.module.ts
// declaration of routes in array
export const routingComponents = [HomePageComponent,AboutUsComponent,ContactusComponent,PrivacyPolicyComponent,WorkWithUsComponent,AdvertiseWithUsComponent,NewsListComponent ,NewsViewComponent];
