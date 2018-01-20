import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocialStatsComponent } from './social-stats/social-stats.component';
import { ImageWallComponent } from './image-wall/image-wall.component';
import { ProjectWallComponent } from './project-wall/project-wall.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialStatsComponent,
    ImageWallComponent,
    ProjectWallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
