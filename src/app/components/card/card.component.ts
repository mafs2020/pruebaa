/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() user!: IUser;
  constructor(private sidebarServies: SidebarService) { }

  ngOnInit(): void {
  }

  mostrar(){
    console.log('object');
    this.sidebarServies.cambiar();
  }

}
