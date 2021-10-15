import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string = '';
  constructor(private http: HttpClient) { }

  entrar(data: any): Observable<any> {
    return this.http.post(`${environment.server}/api/login`, data)
      .pipe(
        tap((data: any) => this.token = data.token),
        catchError(this.errorCustom)
      );
  }

  private errorCustom(err: HttpErrorResponse) {
    console.log('llego');
    console.log('llego');
    console.log('llego');
    console.log('llego');
    console.log('llego');
    console.log('llego');
    console.log('llego');
    console.log('llego');
    console.log('llego');
      console.log('error caught in service')
      console.error(err);
      if (err.error instanceof Error) {
        console.log('An error occurred:', err.error.message);
      } else {
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
      return throwError(err);
  }

  get getToken() {
    return this.token.length > 1;
  }
}
