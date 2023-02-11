import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.sass']
})
export class StructureComponent {

  scrollup() {
    window:scroll(0,0);
  }

}
