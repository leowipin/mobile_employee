import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FulltrackComponent } from '../fulltrack/fulltrack.component';
import { ModalMensajeComponent } from '../modal-mensaje/modal-mensaje.component';
import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicio-en-curso',
  templateUrl: './servicio-en-curso.page.html',
  styleUrls: ['./servicio-en-curso.page.scss'],
})
export class ServicioEnCursoPage implements OnInit {
  origen = {
    lat: 0,
    lng: 0,
  };
  destino = {
    lat: 0,
    lng: 0,
  };

  datosServicio: any = {};
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    public alertController: AlertController,
    private modalController: ModalController,
    private clienteWAService: ClienteWAService,
    private httpClient: HttpClient
  ) {}
  ngOnInit() {
    this.getDateService();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalMensajeComponent,
      cssClass: 'modal-personalizado',
    });

    return await modal.present();
  }

  getDateService() {
    let errorMessage: string;
    const token = localStorage.getItem('token');
    this.clienteWAService.getDateService(token).subscribe(
      (response: any) => {
        console.log(response);
        this.datosServicio = response;
        console.log(this.datosServicio);
      },
      (error) => {
        // Manejar el error de la solicitud HTTP
        console.error(error); // Imprime el error en la consola para fines de depuración

        // Muestra un mensaje de error en la interfaz visual
        errorMessage = 'Ocurrió un error al obtener los datos del servicio.';
        // Asigna el mensaje de error a una propiedad en tu componente que se mostrará en la interfaz
        errorMessage = errorMessage;
      }
    );
  }

  sendDataService() {}
}
