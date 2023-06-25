import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DataServiceResponse } from '../interfaces/response/dataService';
import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
import { ServicioEnCursoPage } from '../servicio-en-curso/servicio-en-curso.page';
@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.scss'],
})
export class ModalMensajeComponent {
  message: string;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedStar = 0;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private http: HttpClient /*private domain: ClienteWAService,
    private service: ServicioEnCursoPage*/
  ) {}

  async confirm() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: `¿Deseas confirmar la acción con el mensaje "${this.message}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: () => {
            this.sendDataService();
            this.showConfirmationAlert();
          },
        },
      ],
    });

    await alert.present();
  }

  async sendDataService() {
    //console.log(ClienteWAService.DJANGO_DOMAIN_NAME);
    const endpoint =
      'https://seproamerica2022.pythonanywhere.com/services/orderReport/';
    //const id = this.service.datosServicio[0];
    const datos: DataServiceResponse = {
      order: '23',
      message: this.message,
      score: this.selectedStar.toString(),
    };

    try {
      const response = await this.http.post(endpoint, datos).toPromise();
      console.log('Datos enviados al administrador:', response);
    } catch (error) {
      console.error('Error al enviar datos al administrador:', error);
    }
  }

  async showConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      message: 'La acción ha sido confirmada.',
      buttons: ['Ok'],
    });

    await alert.present();
    await this.modalController.dismiss();
  }

  async cerrar() {
    await this.modalController.dismiss();
  }

  highlightStar(star: number) {
    if (this.selectedStar === 0 || this.selectedStar === 1) {
      this.selectedStar = star;
    }
  }

  resetStars() {
    if (this.selectedStar === 0) {
      return;
    } else if (this.selectedStar === 1) {
      this.selectedStar = 0;
      console.log('Calificación deseleccionada');
    }
  }

  selectStar(star: number) {
    if (this.selectedStar === star) {
      if (this.selectedStar === 1) {
        this.selectedStar = 0;
        console.log('Calificación deseleccionada');
      }
    } else {
      this.selectedStar = star;
      console.log('Calificación seleccionada:', star);
    }
  }
}
