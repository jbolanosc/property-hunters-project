import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [LandingPageComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LandingPageComponent,
    NavigationComponent
  ]
})
export class LandingModule { }
