import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { saveConfig } from '@ionic/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ClienteWAService } from './servicios/login-registro/login-registro.service';
import { UserDataService } from './servicios/login-registro/userDataService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  recibido: any;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private clienteWAService: ClienteWAService,
    private userDataService: UserDataService
  ) {
    this.userDataService.name$.subscribe((name) => {
      this.name = name;
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  myDate: string = new Date().toISOString();

  openPage() {
    this.navCtrl.navigateForward('/homeperfil');
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.navCtrl.navigateRoot('/servicioenCurso');
    } else {
      this.navCtrl.navigateRoot('/login');
    }
    // Actualizar detalles del usuario en el menú de hamburguesas
    this.actualizarUsuario();
  }

  actualizarUsuario() {
    // Recuperar token del LocalStorage
    const token = localStorage.getItem('token');

    if (token) {
      // Hacer una solicitud HTTP para obtener detalles del usuario
      this.clienteWAService.getNames(token).subscribe(
        (response) => {
          // Actualizar detalles del usuario en el menú de hamburguesas
          this.name = response.first_name;
        },
        (error) => {
          // Manejar el error de la solicitud HTTP
        }
      );
    } else {
      // Si el token no está presente en el LocalStorage, mostrar el menú de hamburguesas con el nombre y apellido por defecto
      this.name = '';
    }
  }

  signOut() {
    localStorage.removeItem('token');
    location.reload();
  }

  // Idealmente con el QR Generado por el BackEnd
  // Se redirecciona a la ventana de calificación

  startScan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
