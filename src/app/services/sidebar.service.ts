import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  mostrar: boolean = true;
  mostrarObser: BehaviorSubject<any> = new BehaviorSubject(true);
  observable$ = this.mostrarObser.asObservable();
  constructor() { }

  cambiar(){
    this.mostrar = false;
    console.log(this.mostrar);
    this.mostrarObser.next(this.mostrar);
  }

  cerrar() {
    this.mostrar = true;
    this.mostrarObser.next(this.mostrar);
  }
}
