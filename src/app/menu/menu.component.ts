import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  viewModal!: boolean; //mostrar

  constructor(private service:ServiceService) {

   }

  ngOnInit(): void {
    this.service.$modal.subscribe((valor) => { this.viewModal = valor});
  }



  closeModal(){
    this.service.$modal.emit(false);
  }

  openModal(){
    this.viewModal = true;
   }




}



