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
    this.deportes.getdeportes().subscribe(
      (r) => {this.deportes = r; console.log(r)},
      (e) => {console.log(e)}
    )
  }


}
