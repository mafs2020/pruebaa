/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  mostrar=false;
  mostrarOb = this.asidebarServices.observable$;
  userObser$ = this.dtServices.userObser;

  constructor(
    private asidebarServices: SidebarService,
    private dtServices: DataService
  ) { }

  ngOnInit(): void {
    this.mostrarOb.subscribe(data => {
      this.mostrar = data;
      console.log(this.mostrar);
    });
  }

  cerrar(){
    this.asidebarServices.cerrar();
  }

}
