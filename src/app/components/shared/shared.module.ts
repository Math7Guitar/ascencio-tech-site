import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarScrollDirective } from './navbar-scroll.directive';



@NgModule({
  declarations: [
    CardComponent,
    Card2Component,
    CarouselComponent,
    NavbarScrollDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    Card2Component,
    CarouselComponent,
    NavbarScrollDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
