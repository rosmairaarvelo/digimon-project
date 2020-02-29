import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigimonsComponent } from './components/digimons/digimons.component';


const routes: Routes = [
  { path: 'Digimons', component: DigimonsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Digimons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
