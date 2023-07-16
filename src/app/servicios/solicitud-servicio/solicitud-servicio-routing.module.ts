import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SolicitudServicioPage } from './solicitud-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudServicioPage
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudServicioPageRoutingModule {}
