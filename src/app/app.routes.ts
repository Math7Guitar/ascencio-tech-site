import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { StructureComponent } from './layout/structure/structure.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { SolarComponent } from './pages/solar/solar.component';
import { SitesComponent } from './pages/sites/sites.component';
import { PcassemblyComponent } from './pages/pcassembly/pcassembly.component';

const routes: Routes = [
  { path: "", component: StructureComponent, children: [
    { path: "home", component: HomeComponent },
    { path: "solar", component: SolarComponent },
    { path: "sites", component: SitesComponent },
    { path: "pc", component: PcassemblyComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
