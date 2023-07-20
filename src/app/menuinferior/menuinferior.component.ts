import { Component, OnInit } from '@angular/core';
import { ServicioEnCursoPage } from '../servicio-en-curso/servicio-en-curso.page';
import { PerfilPageModule } from '../perfil/perfil.module';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menuinferior',
  templateUrl: './menuinferior.component.html',
  styleUrls: ['./menuinferior.component.scss'],
})
export class MenuinferiorComponent  implements OnInit {

  constructor(private route: ActivatedRoute, 
    private servicioEnCurso: ServicioEnCursoPage,
    private perfilPageModule: PerfilPageModule, 
    ){
    
  }

  ngOnInit() {}

}
