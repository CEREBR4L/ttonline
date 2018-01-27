import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SocialStatsComponent } from './Generic_Components/social-stats/social-stats.component';
import { ImageWallComponent } from './Generic_Components/image-wall/image-wall.component';
import { ProjectWallComponent } from './Generic_Components/project-wall/project-wall.component';
import { Route } from '@angular/router/src/config';
import { HomeComponent } from './Page_Components/home/home.component';
import { ProjectsComponent } from './Page_Components/projects/projects.component';
import { WorkComponent } from './Page_Components/work/work.component';
import { AboutComponent } from './Page_Components/about/about.component';
import { FourOhFourComponent } from './Page_Components/four-oh-four/four-oh-four.component';
import { NavComponent } from './Generic_Components/nav/nav.component';
import { FooterComponent } from './Generic_Components/footer/footer.component';
import { BannerComponent } from './Generic_Components/banner/banner.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '404',
    component: FourOhFourComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SocialStatsComponent,
    ImageWallComponent,
    ProjectWallComponent,
    HomeComponent,
    ProjectsComponent,
    WorkComponent,
    AboutComponent,
    FourOhFourComponent,
    NavComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
