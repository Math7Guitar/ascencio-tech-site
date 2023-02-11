import { SolarComponent } from './pages/solar/solar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureComponent } from './layout/structure/structure.component';
import { HomeComponent } from './pages/home/home.component';
import { SitesComponent } from './pages/sites/sites.component';

const routes: Routes = [
  { path: "", component: StructureComponent, children: [
    { path: "home", component: HomeComponent },
    { path: "solar", component: SolarComponent },
    { path: "sites", component: SitesComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
