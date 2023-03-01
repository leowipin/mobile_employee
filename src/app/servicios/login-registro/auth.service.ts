import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { RegisterModel } from "src/app/modelos/register.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService{
  [x: string]: any;

  UsuarioApp: RegisterModel = {
    NumeroCell: 0,
    idEquipamiento: 0,
    Marca: '',
    Color: '',
    usuarioApp: '',
    contrasenia: ''
  };

  constructor() { }


  //log
  //sesionIniciada: boolean = false;
  sesionIniciada = new Subject<boolean>()

  sesionValidada: boolean = true;

  //Para el registro (validacion)
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    numeroCell: new FormControl(''),
    idEquipamiento: new FormControl(''),
    Marca: new FormControl(''),
    Color: new FormControl(''),
    usuarioApp: new FormControl(''),
    Contrasenia: new FormControl(''),
    esPermanente: new FormControl(false)

  });


  //Metodo usado para indicar que se ha iniciado sesion y dicha variable enviarla al guard
  loginDos(){
    this.sesionIniciada.next(true)
    console.log(this.sesionIniciada)
  }

  logout(){
    this.sesionIniciada.next(false)
  }

  estaAutenticado(){
    return this.sesionIniciada;
  }

  //Método para probar paso de datos a componente principal
  getUsuario(){
    return this.UsuarioApp;
  }

  /*Metodo para obtener el usuario del inicio de sesion */
  infoPutUsuario(usuarioIS:RegisterModel){
    this.UsuarioApp = usuarioIS;
  }

  /*Metodo para enviar datos de usuario a distintos componentes */
  enviarUsuario(){
    return this.UsuarioApp;
  }

  //Metodo para resetear usuario
  reseteoUsuario(){
    this.UsuarioApp = {
    NumeroCell: 0,
    idEquipamiento: 0,
    Marca: '',
    Color: '',
    usuarioApp: '',
    contrasenia: ''
    };
    this.sesionIniciada.next(false)
  }


}
