import { Component } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.sass']
})
export class SitesComponent {

  //Images
  frame = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
  hotsites = "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80";
  landingpages = "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  catalog = "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  sites = "https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60";

  //Texts
  p1 = "A promoção de seu conteúdo, serviço ou produto, muitas vezes se torna uma dificuldade, devido a ausência de conhecimento para fazer o design e estruturar / criar seu primeiro contato com o cliente. Desconforto de simples resolução. Através de modelos já produzidos e integráveis você consegue e velocidade de entrega, para suas atividades começarem o quanto antes. Mas caso deseje algo com design que tenha sua identidade em cada detalhe, os sites personalizados, são sua melhor escolha.";
  p2 = "Página de Vendas rápidas. Deseja vender um produto específico ou serviço e ir direto ao ponto com seu cliente? Os Hot Sites promovem sua oferta e utilizam de gatilhos neurológicos para captar a atenção de seu cliente em potencial e transforma-la em vendas.";
  p3 = "Página com o intuito de informar o cliente a respeito de seu trabalho ou empresa / negócio.";
  p4 = "Página com o objetivo de mostrar seus produtos, sem vende-los diretamente, mas sim de gerar contato do cliente com sua empresa, negócio ou loja, para encomendar o produto ou serviço oferecido.";
  p5 = "Conjunto de telas informativas, a respeito deu seu produto ou serviço, com o intuito de capturar a atenção do cliente, de forma que ele navegue no site para consumir toda as informações, abstratas e mais específicas, disponibilizadas.";

  //Prices
  prices: Array<Array<number>> = [[500, 1000], [1000, 3000], [1500, 4000], [1000, 5000]]
}
