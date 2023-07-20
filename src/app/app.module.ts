import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ClienteWAService } from './servicios/login-registro/login-registro.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalMensajeComponent } from 'src/app/modal-mensaje/modal-mensaje.component';
import { CommonModule } from '@angular/common';
import { ServicioEnCursoPage } from './servicio-en-curso/servicio-en-curso.page';

@NgModule({
  declarations: [AppComponent,
    ModalMensajeComponent,
    ServicioEnCursoPage,
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    CommonModule],
  providers: [BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ClienteWAService],
  bootstrap: [AppComponent],
})
export class AppModule {}
