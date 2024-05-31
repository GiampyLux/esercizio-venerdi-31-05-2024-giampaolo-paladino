import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriComponent } from './pages/autori/autori.component';
import { CompletatiComponent } from './pages/completati/completati.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'autori',
    component: AutoriComponent
  },
  {
    path: 'completati',
    component: CompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
