import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuServicios } from './menu-servicios.component';

const routes: Routes = [
  {
    path: '',
    component: MenuServicios,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuServiciosRoutingModule {}
