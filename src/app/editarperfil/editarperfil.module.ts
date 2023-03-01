import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditarperfilPageRoutingModule } from './editarperfil-routing.module';

import { EditarperfilPage } from './editarperfil.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarperfilPage]
})
export class EditarperfilPageModule {}
