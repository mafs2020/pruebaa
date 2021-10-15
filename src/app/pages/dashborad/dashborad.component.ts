import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
  response?: IResponse;
  paginacion: number = 1;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dataService.getUsers(this.paginacion).subscribe(data => this.response = data);
  }

  paginacionAdelante(){
    this.paginacion +=1;
    // console.log('fffffffffff', this.paginacion);
    // console.log('fffffffffff', this.response!.total_pages);
    if(this.response!.total_pages >= this.paginacion) this.response!.total_pages = this.paginacion;
    this.dataService.getUsers(this.paginacion).subscribe(data => this.response = data);
  }

  paginacionAtras(){
    this.paginacion -=1;
    if(this.paginacion <= 0) this.paginacion = 1;
    this.dataService.getUsers(this.paginacion).subscribe(data => this.response = data);
  }

}
