import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.scss'],
})

export class ModalMensajeComponent {
  message: string = '';

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
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
            this.showConfirmationAlert();
          },
        },
      ],
    });

    await alert.present();
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
  
  async cerrar(){
    await this.modalController.dismiss();
  }

}

