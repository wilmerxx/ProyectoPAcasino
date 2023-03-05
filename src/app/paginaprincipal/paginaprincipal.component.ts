import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.scss']
})
export class PaginaprincipalComponent implements OnInit {


  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
