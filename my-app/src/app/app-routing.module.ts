import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ventanasComponent } from './ventanas/ventanas.component';

const routes: Routes = [
  { path: 'ventanas', component: ventanasComponent, data: { param: 'ventanas' } },
  { path: 'inicio', component: ventanasComponent, data: { param: 'inicio' }},
  { path: 'seleccion', component: ventanasComponent, data: { param: 'seleccion' }}
 // { path: 'histogram', component: DashboardComponent, data: { param: 'histogram' }},
 // { path: '', redirectTo: 'problem_management', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
