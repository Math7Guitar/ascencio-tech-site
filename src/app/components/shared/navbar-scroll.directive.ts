import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[NavbarScroll]'
})
export class NavbarScrollDirective {

  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY != 0) {
      /*this._renderer.setStyle(
        this._elementRef.nativeElement, 'background-color', 'rgba(31, 100, 31, 1)'
      );*/

      this.backgroundColor = 'rgba(31, 100, 31, 1)';
    } else {
      this.backgroundColor = 'rgba(31, 100, 31, 0)';
    }
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;


  constructor() { }

}
