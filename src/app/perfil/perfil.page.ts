import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  recibido: any;
  nombreur: any;
  apellidour: any;
  emailur: any;
  fechanacimientour:any;
  celularur: any;
  cedulaur: any;
  direccionur: any;
  perfil = "assets/img/perfilcliente.png";

  constructor(private route: ActivatedRoute, private navCtrl: NavController, public alertController: AlertController){
    
  }
  editar(){
    this.navCtrl.navigateForward("/homeperfil");
  }

  ngOnInit() {

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cancelar Servicio',
      message: '¿Está seguro de cancelar el servicio?',
      buttons: [
        {
          text: 'Sí',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


  home(){
    this.navCtrl.navigateForward("/homeperfil");
  }

}



