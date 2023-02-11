import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.sass']
})
export class Card2Component {

  @Input('title') title: string = "Title";
  @Input('subtitle') subtitle: string = "Card subtitle";
  text: string = "Para melhor entendimento da tecnologia, cheque o site abaixo.";
  @Input('link') link: string = "link";


}
