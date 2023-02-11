import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input('title') title: string = "Title";
  @Input('img') img: string = "";
  @Input('text') text: string = "Para mais informações e detalhes sobre o tipo de site, clique em saiba + e tire suas dùvidas.";
  @Input('link') link : string = '';

}
