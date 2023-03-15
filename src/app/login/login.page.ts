import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClienteWAService } from '../servicios/login-registro/login-registro.service';
import { AuthService } from '../servicios/login-registro/auth.service';
import { SignIn } from '../interfaces/employee/signin';

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
    public authService:AuthService
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

  redirigir_home(){
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
        this.alertController.create({
          message:"Inicio de sesion exitoso",
          buttons: ['Dismiss']
        }).then(alert=> alert.present())
        this.redirigir_home()
        },
      error: (error) => {
        let keyError: string = Object.keys(error.error)[0]
        this.alertController.create({
          message: error.error[keyError],
          buttons: ['Dismiss']
        }).then(alert=> alert.present())
      }
    });
    
  }

}

