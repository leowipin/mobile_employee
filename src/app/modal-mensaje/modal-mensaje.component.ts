import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
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
  /*message: string;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedStar = 0;*/
  starCount = 0;
  @Input() serviceId: string; // ID del servicio

  rating = 0; // Valor seleccionado en el slider
  message = ''; // Mensaje opcional
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private http: HttpClient /*private domain: ClienteWAService,
    private service: ServicioEnCursoPage*/
  ) {}

  async confirm() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: `¿Deseas confirmar la acción?`,
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
    const token = localStorage.getItem('token');
    //const id = this.service.datosServicio[0];
    const datos: DataServiceResponse = {
      order: this.serviceId,
      message: this.message,
      score: this.rating.toString(),
    };

    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`,
    });
    /* try {
      const response = await this.http.post(endpoint, datos).toPromise();
      console.log('Datos enviados al administrador:', response);
    } catch (error) {
      console.error('Error al enviar datos al administrador:', error);
    }*/
    console.log(datos);
    this.http.post(endpoint, datos, { headers }).subscribe(
      (response) => {
        console.log(response);
        // La solicitud fue exitosa, puedes manejar la respuesta aquí si es necesario
        console.log('Datos enviados al administrador:', response);
      },
      (error) => {
        // Ocurrió un error al enviar la solicitud, puedes manejar el error aquí si es necesario
        console.error('Error al enviar datos al administrador:', error);
      }
    );
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

  /*highlightStar(star: number) {
    if (this.rating === 0 || this.rating === 1) {
      this.rating = star;
    }
  }*/

  /*getStars(): boolean[] {
    if (this.rating >= 0 && this.rating < 1) {
      this.starCount = 0;
      this.rating = 0;
    } else if (this.rating >= 1 && this.rating < 2) {
      this.starCount = 1;
    } else if (this.rating >= 2 && this.rating < 3) {
      this.starCount = 2;
    } else if (this.rating >= 3 && this.rating < 4) {
      this.starCount = 3;
    } else if (this.rating >= 4 && this.rating < 5) {
      this.starCount = 4;
    } else {
      this.starCount = this.rating;
    }
    const starArray = Array(5).fill(false);
    console.log(this.starCount); // Crea un arreglo de 5 elementos, inicializados en falso
    console.log(starArray);

    for (let i = 0; i < this.starCount; i++) {
      starArray[i] = true;
      console.log(starArray[i]); // Marca las primeras 'starCount' estrellas como verdadera(llenas)
    }

    return starArray;
  }*/
  getStars(): boolean[] {
    // Implementa lógica para mostrar estrellas llenas o vacías
    // según el valor de this.rating.
    // Ejemplo:
    const stars: boolean[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= this.rating);
    }
    return stars;
  }
  /*updateStars() {
    if (this.rating >= 0 && this.rating <= 1) {
      this.starCount = [0]; // Mostrar cero estrellas si el valor está entre 0 y 1
    } else {
      this.stars = Array(Math.round(this.sliderValue)).fill(1); // Rellenar el array de estrellas según el valor entero del slider
    }
  }*/

  /*resetStars() {
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
  }*/
}
