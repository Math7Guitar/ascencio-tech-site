import { RouterModule } from '@angular/router';
import { SharedModule } from './../components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarComponent } from './solar/solar.component';
import { SitesComponent } from './sites/sites.component';
import { HomeComponent } from './home/home.component';
import { PcassemblyComponent } from './pcassembly/pcassembly.component';



@NgModule({
  declarations: [
    SolarComponent,
    SitesComponent,
    HomeComponent,
    PcassemblyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    SitesComponent,
    HomeComponent,
    SolarComponent,
    PcassemblyComponent
  ]
})
export class PagesModule { }
