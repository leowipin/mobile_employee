import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicioEnCursoPage } from './servicio-en-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioEnCursoPage
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class ServicioEnCursoPageRoutingModule {}
