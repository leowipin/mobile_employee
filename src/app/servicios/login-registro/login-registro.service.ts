import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
<<<<<<< HEAD
import { SignIn } from "src/app/interfaces/employee/signin";
import { SignInResponse } from "src/app/interfaces/response/signin";
import { Name } from "src/app/interfaces/employee/name";
import { DateService } from "src/app/interfaces/employee/dateservice";
import { Servicio } from "src/app/interfaces/employee/servicio";
=======
import { SignIn } from 'src/app/interfaces/employee/signin';
import { SignInResponse } from 'src/app/interfaces/response/signin';
import { Name } from 'src/app/interfaces/employee/name';
import { DateService } from 'src/app/interfaces/employee/dateservice';
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e

@Injectable({
  providedIn: 'root',
})
export class ClienteWAService {
  /*Url del servidor */
<<<<<<< HEAD
  DJANGO_DOMAIN_NAME: string = 'https://seproamerica2022.pythonanywhere.com/';
=======
  // eslint-disable-next-line @typescript-eslint/naming-convention
  static DJANGO_DOMAIN_NAME: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  DJANGO_DOMAIN_NAME = 'https://seproamerica2022.pythonanywhere.com/';
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e

  constructor(private http: HttpClient) {}

  signin(data: SignIn): Observable<SignInResponse> {
<<<<<<< HEAD
    const endpoint: string = this.DJANGO_DOMAIN_NAME + 'users/phoneAccountSignin/';
=======
    const endpoint: string =
      this.DJANGO_DOMAIN_NAME + 'users/phoneAccountSignin/';
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e
    return this.http.post<SignInResponse>(endpoint, data).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getNames(token: string): Observable<Name> {
    const endpoint: string = this.DJANGO_DOMAIN_NAME + 'users/phoneName/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Name>(endpoint, { headers });
  }
  getDateService(token: string): Observable<DateService> {
<<<<<<< HEAD
    const endpoint: string = this.DJANGO_DOMAIN_NAME + 'services/phoneAccountOrder/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<DateService>(endpoint, { headers });
  }

  getServiciosTodos(token: string): Observable<Servicio[]> {
    const endpoint: string = this.DJANGO_DOMAIN_NAME + 'services/phoneAccountOrdersList/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Servicio[]>(endpoint, { headers });
=======
    const endpoint: string =
      this.DJANGO_DOMAIN_NAME + 'services/phoneAccountOrder/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<DateService>(endpoint, { headers });
>>>>>>> d2ee974b36bb50c2eab8bb3faeae0bcac73f8d6e
  }
}

