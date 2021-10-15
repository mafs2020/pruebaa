import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IResponse } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  constructor(private http: HttpClient) { }

  getUsers( paginacion = 1 ): Observable<IResponse>{
    return this.http.get<IResponse>(`${environment.server}/api/users?page=${paginacion}`)
      .pipe(catchError(this.errorCustom));
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
}
