import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-detallesservicio',
  templateUrl: './detallesservicio.page.html',
  styleUrls: ['./detallesservicio.page.scss'],
})
export class DetallesservicioPage implements OnInit {

  data: any;
 
  constructor(private route: ActivatedRoute, 
    private router: Router,
    private navCtrl: NavController
    ) {
 
  }
 
  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }
  }

    serviciosencurso(){
    this.navCtrl.navigateForward("/servicios-en-curso");
    }

}
