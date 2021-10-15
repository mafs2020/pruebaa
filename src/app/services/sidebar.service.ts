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
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
    this.mostrarObser.next(this.mostrar);
  }
}
