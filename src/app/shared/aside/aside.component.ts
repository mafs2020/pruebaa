/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  mostrar = this.asidebarServices.mostrar;
  ff = this.asidebarServices.observable$;
  constructor(private asidebarServices: SidebarService) { }

  ngOnInit(): void {
    this.ff.subscribe(data => this.mostrar = data);
  }

}
