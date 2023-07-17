import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
//import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ClienteWAService } from 'src/app/servicios/login-registro/login-registro.service';
import { Servicio } from 'src/app/interfaces/employee/servicio';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  origen = {
    lat: 0,
    lng: 0,
  };
  destino = {
    lat: 0,
    lng: 0,
  };

  datosServicio: any = {};
  serviciosTodos: Servicio[] = [];
  presentingElement = undefined;
  permission: boolean;
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    public alertController: AlertController,
    private modalController: ModalController,
    private clienteWAService: ClienteWAService,
    private httpClient: HttpClient,
    private actionSheetCtrl: ActionSheetController,
  //  private commonModule: CommonModule
  ) {}
  ngOnInit() {
    this.getTodosServicios();
    this.getDateService();
    this.presentingElement = document.querySelector('.ion-page');
  }
  getDateService() {
    let errorMessage: string;
    const token = localStorage.getItem('token');
    this.clienteWAService.getDateService(token).subscribe(
      (response: any) => {
       // console.log(response);
        this.datosServicio = response;
       // console.log(this.datosServicio);
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

  getTodosServicios() {
    let errorMessage: string;
    const token = localStorage.getItem('token');
    this.clienteWAService.getServiciosTodos(token).subscribe(
      (response) => {
         console.log('hola');
         this.serviciosTodos = response;
         console.log(this.serviciosTodos);
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
  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿Confirma el inicio de servicio de Guardia?',
      buttons: [
        {
          text: 'Confirmar',
          role: 'en curso',
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'en curso';
  };
}
