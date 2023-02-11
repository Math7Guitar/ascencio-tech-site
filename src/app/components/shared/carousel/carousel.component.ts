import { Component } from '@angular/core';
import { CarouselItem } from '../../models/interfaces/carousel-item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {

  item1 = { title: "Sites", subtitle: "Seu negócio acessível ao cliente", img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }

  public items: CarouselItem[] = [ { title: "Segurança da Informação", subtitle: "Proteja seus dados", img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                                   { title: "Energia Solar", subtitle: "Energia Limpa", img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                                   { title: "Cloud Computing", subtitle: "Conecte-se ao Presente", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" } ]

}
