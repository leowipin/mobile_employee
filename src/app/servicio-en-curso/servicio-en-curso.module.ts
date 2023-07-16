import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioEnCursoPageRoutingModule } from './servicio-en-curso-routing.module';
import { ServicioEnCursoPage } from './servicio-en-curso.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
//    ServicioEnCursoPageRoutingModule,
    CommonModule,
  ],
  declarations: [ServicioEnCursoPage]
})
export class ServicioEnCursoPageModule {}
