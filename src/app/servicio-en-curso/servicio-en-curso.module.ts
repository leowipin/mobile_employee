import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioEnCursoPageRoutingModule } from './servicio-en-curso-routing.module';
import { ServicioEnCursoPage } from './servicio-en-curso.page';
import { DetallesPage } from './componentes/detalles.page';
import { DetallesservicioPage } from '../detallesservicio/detallesservicio.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
//    ServicioEnCursoPageRoutingModule,
    CommonModule,
  ],
  declarations: [ServicioEnCursoPage, DetallesPage, DetallesservicioPage ]
})
export class ServicioEnCursoPageModule {}
