import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IResponse, IUser } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  personajesKey = 'personajes';
  userObser: Subject<any> = new Subject();
  userObser$ = this.userObser.asObservable();

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

  // obtener personajes
  get personajesGetter(): IUser[] {
    let arreglo: any = localStorage.getItem( this.personajesKey );
    arreglo = arreglo ? JSON.parse(arreglo) : [];
    return arreglo;
  }

  // agregr personjes
  set personajeSet(per: IUser) {
    let personajes = this.personajesGetter;
    personajes.push(per);
    this.personajesSet = personajes;
  }

  // setear personjes
  private set personajesSet(pers: IUser[]) {
    localStorage.setItem(this.personajesKey, JSON.stringify(pers));
  }

  // eliminar
  eliminarPersonaje(personaje: IUser) {
    const arreglo = this.personajesGetter.filter(per => personaje.id != per.id);
    this.personajesSet = arreglo;
  }

  favoritos(personajes: IUser[]): IUser[] {
    const d = personajes.map((r: any) => {
      const { episode, ...rest } = r;
      for (let i = 0; i < this.personajesGetter.length; i++) {
        const element = this.personajesGetter[i];
        if(element.id == rest.id) {
          rest.favorito = element.id == rest.id
          break;
        }
      }
      console.log(rest.favorito);
      return rest;
    });
    return d;
  }

  getSingleUser(idUser: string|number): Observable<IUser>{
    return this.http.get<IUser>(`${environment.server}/api/users/${idUser}`)
    .pipe(
      tap(data => this.userObser.next(data)),
      catchError(this.errorCustom)
    );
  }
}
