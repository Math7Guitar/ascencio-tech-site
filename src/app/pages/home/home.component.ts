import { Component } from '@angular/core';
import { SiteCard } from 'src/app/components/models/interfaces/site-card.interface';
import { TechCard } from 'src/app/components/models/interfaces/tech-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public siteTypes: SiteCard[] = [ { title: "HotSite", link: "/sites", img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80" },
                                   { title: "Landing Page", link: "/sites", img: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                                   { title: "Site", link: "/sites", img: "https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" } ]

  public techs: TechCard[] =[ { title: "Java", subtitle: "Linguagem", link: "https://docs.oracle.com/en/java/" },
                              { title: "Spring", subtitle: "Framework", link: "https://spring.io/projects/spring-boot" },
                              { title: "NodeJs", subtitle: "Interpretador e Linguagem", link: "https://nodejs.org/en/docs/" },
                              { title: "Angular", subtitle: "Framework", link: "https://angular.io/docs" } ]

}
