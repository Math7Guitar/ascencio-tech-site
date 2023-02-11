import { RouterModule } from '@angular/router';
import { SharedModule } from './../components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarComponent } from './solar/solar.component';
import { SitesComponent } from './sites/sites.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    SolarComponent,
    SitesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    SitesComponent,
    HomeComponent,
    SolarComponent
  ]
})
export class PagesModule { }
