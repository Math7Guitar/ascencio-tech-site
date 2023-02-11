import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure/structure.component';
import { AppRoutingModule } from '../app.routes';
import { SharedModule } from '../components/shared/shared.module';
import { TemplateModule } from '../template/template.module';

//Material Angular
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StructureComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    AppRoutingModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    StructureComponent
  ]
})
export class LayoutModule { }
