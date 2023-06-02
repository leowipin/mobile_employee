import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
import { SignIn } from '../interfaces/employee/signin';
import { UserDataService } from '../servicios/login-registro/userDataService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;

  ionicForm: FormGroup;
  
  isSubmitted = false;

  constructor(private navCtrl: NavController, 
    public formBuilder: FormBuilder, 
    public alertController: AlertController,
    private clienteWAService: ClienteWAService,
    private userDataService: UserDataService,
    ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required,   Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {  
      console.log("es invalido")
      return false;
    } else {
      this.getUsuarioA()
      
    }
  }

  redirigir_servicio(){
    this.navCtrl.navigateForward("/servicioenCurso");
    this.ionicForm.reset();
  }
  
  togglePasswordClick() {
    this.showPassword = !this.showPassword;
  }



  getUsuarioA(): void{
    const data: SignIn = {
      email:this.ionicForm.value.email,
      password:this.ionicForm.value.password
    }
    this.clienteWAService.signin(data).subscribe({
      next: (response) => {
        const token = localStorage.getItem('token');
        this.clienteWAService.getNames(token).subscribe(
          (response) => {
            this.userDataService.updateName(response.first_name);
          },
          (error) => {
            console.log(error);
          }
        );
        this.redirigir_servicio()
        },
      error: (error) => {
        this.alertController.create({
          message: "Correo o contraseña incorrecto",
          buttons: ['Cerrar']
        }).then(alert=> alert.present())
      }
    });
    
  }

}

