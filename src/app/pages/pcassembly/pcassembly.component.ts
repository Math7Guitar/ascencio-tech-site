import { Component } from '@angular/core';

@Component({
  selector: 'app-pcassembly',
  templateUrl: './pcassembly.component.html',
  styleUrls: ['./pcassembly.component.sass']
})
export class PcassemblyComponent {

  // Images
  pc = "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1442&q=80";
  pc2 = "https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";
  pc3 = "https://images.unsplash.com/photo-1591238372408-8b98667c0460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
  oldPC = "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80";

  //Texts
  p1 = "Já pensou em dar um upgrade no seu equipamento, e aproveitar as experiencias e aparelhos mais novos, tudo dentro de um preço mais acessível?";
  p2 = "Se você não sabe as tecnologias de software evoluem separadamente das tecnologias de hardware, isto significa que você pode estar perdendo a chance de usufruir das melhores e mais modernas experiências proporcionadas pela atual indústria tecnológica. É muito comum as pessoas perderem tempo de confraternização com amigos e parentes pela limitação tecnológica de seus equipamentos.";
  p3 = "O caso mais repetido diz respeito a união \"lazer + trabalho\", onde a área que mais evolui e traz novidades para o mundo virtual e/ou digital, a área dos games, afeta a economia feita. A limitação de determinados componentes vendidos pelas lojas convencionais, hipermercados e etc., te fazem muitas das vezes gastar uma quantia razoávelmente elevada em um computador que não vai atender todas as suas necessidades e desejos, já que estes produtos são vendidos de forma que não lhe garantem a oportunidade de customizar a combinação de seus componentes, ou seja, não é possível substituir aquele componente pior, por um melhor, causando assim, algumas dificuldades futuramente. A Internet tem evoluído e seu computador precisa evoluir também, caso contrário, você pode acabar ficando de fora."
  problems: Array<string> = ["Games travando ou interrompendo sua execução durante o uso.", "Impossibilidade de aproveitar recursos interativos de sites ou softwares.", "Recursos incompatíveis com seu equipamento."];
  p4 = "Nesta etapa é feito o dimensionamento correto para o seu equipamento, onde os componentes mais adequados serão selecionados de acordo com sua necessidade e poder aquisitivo, visando atender a melhor opção e corresponder com suas expectativas.";
  components: Array<string> = ["Placa mãe.", "Processador.", "Placa de vídeo.", "etc."];
  p5 = "Tudo para a montagem e entrega do seu computador.";
  p6 = "Em caso de dano ou prejuízo no seu computador, caso haja uma maneira de recuperação ou concerto do seu equipamento e esteja dentro dos conhecimentos detentidos, na manutenção é feita a manutenção preventiva e/ou a restauração do seu equipamento.";
  listman: Array<string> = ["Limpeza.", "Cable Manegement (Organização de cabos).", "Checagem dos componentes.", "etc."];
  p7 = "A manutenção de computadores de forma preventiva é uma rotina operacional onde os dispositivos computacionais são verificados regularmente em busca de falhas, vulnerabilidades de segurança e fatores que possam afetar o desempenho das máquinas.\nEsse procedimento possui como principal objetivo, possibilitar um bom desempenho em médio e longo prazo, além de garantir uma alta durabilidade do equipamento."
  listben: Array<string> = ["Alto desempenho.", "Evitar possíveis ataques cibernéticos.", "Durabilidade dos dispositivos.", "Sistema atualizado."];
  p8 = "Restauração do dispositivo danificado, desde que haja a possibilidade de recoperação, caso contrario a substituição do aparelho ou componente será a opção mais indicada."
}
