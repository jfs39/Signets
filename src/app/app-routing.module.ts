import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesSignetsComponent } from './mes-signets/mes-signets.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'mesSignets', component: MesSignetsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
