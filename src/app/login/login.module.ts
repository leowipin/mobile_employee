import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [LoginPage],
  providers:[ ClienteWAService ]
})
export class LoginPageModule {}
