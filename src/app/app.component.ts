import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  //modalSwitch: boolean = false;

  //title = 'project-pa-casaapuesta';

  constructor(private modalSS: ServiceService){ }

    ngOnInit() {
      //this.modalSS.$modal.subscribe((valor)=>this.modalSwitch = valor)
    }

    /*openModal() {
      this.modalSwitch = true;
    }*/



}
