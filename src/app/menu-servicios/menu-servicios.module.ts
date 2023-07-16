import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuServiciosRoutingModule } from './menu-servicios-routing.module';
import { MenuServicios } from './menu-servicios.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuServiciosRoutingModule
  ],
  declarations: [MenuServicios]
})
export class MenuServiciosModule {}
