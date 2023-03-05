import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  service:any;
  constructor(public deportes:ServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
