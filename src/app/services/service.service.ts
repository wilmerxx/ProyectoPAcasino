import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  $modal = new EventEmitter<any>();

  constructor() { }
}
