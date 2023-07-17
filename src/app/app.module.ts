import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
<<<<<<< HEAD
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e
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
<<<<<<< HEAD
import { ServicioEnCursoPage } from './servicio-en-curso/servicio-en-curso.page';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent,
    ModalMensajeComponent,
    ServicioEnCursoPage],
  entryComponents: [],
  imports: [BrowserModule,
=======

@NgModule({
  declarations: [AppComponent, ModalMensajeComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
<<<<<<< HEAD
    CommonModule],
  providers: [BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ClienteWAService],
=======
  ],
  providers: [
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ClienteWAService,
  ],
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e
  bootstrap: [AppComponent],
})
export class AppModule {}
