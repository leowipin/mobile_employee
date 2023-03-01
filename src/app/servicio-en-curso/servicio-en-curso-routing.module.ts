import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioEnCursoPage } from './servicio-en-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioEnCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioEnCursoPageRoutingModule {}
