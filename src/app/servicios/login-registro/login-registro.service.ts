import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { SignIn } from "src/app/interfaces/employee/signin";
import { SignInResponse } from "src/app/interfaces/response/signin";
import { Name } from "src/app/interfaces/employee/name";


@Injectable({
  providedIn: 'root'
})
export class ClienteWAService {
  /*Url del servidor */
  DJANGO_DOMAIN_NAME:string = 'https://seproamerica2022.pythonanywhere.com/';

  constructor(private http: HttpClient) { }

  signin(data: SignIn): Observable<SignInResponse>{
    const endpoint:string = this.DJANGO_DOMAIN_NAME+'users/phoneAccountSignin/';
    return this.http.post<SignInResponse>(endpoint, data).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      }),
    );
  }

  getNames(token:string): Observable<Name>{
    const endpoint:string = this.DJANGO_DOMAIN_NAME+'users/phoneName/';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Name>(endpoint, { headers: headers })
  }
}
