import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FulltrackComponent } from '../fulltrack/fulltrack.component';
import { ModalMensajeComponent } from  '../modal-mensaje/modal-mensaje.component';
import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servicio-en-curso',
  templateUrl: './servicio-en-curso.page.html',
  styleUrls: ['./servicio-en-curso.page.scss'],
})
export class ServicioEnCursoPage implements OnInit {

  origen = {
    lat: 0,
    lng: 0
  };
  destino = {
    lat: 0,
    lng: 0
  };

  datosServicio: any = {};
  constructor(private navCtrl: NavController, private menu: MenuController,public alertController: AlertController, 
    private modalController: ModalController, private clienteWAService: ClienteWAService){
  }
  ngOnInit() {
    this.getDateService();
  }

  getDateService(){
    const token = localStorage.getItem('token');
    this.clienteWAService.getDateService(token).subscribe(
      (response: any) => {
          console.log(response);
          this.datosServicio=response;
          console.log(this.datosServicio);
      },
      (error) => {
        // Manejar el error de la solicitud HTTP
         this.toastr.error('Ocurrió un error al obtener los datos del servicio', 'Error');
      }
    );
  }
}

