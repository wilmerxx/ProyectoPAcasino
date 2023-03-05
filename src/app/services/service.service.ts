import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, map } from 'rxjs';
import {Usuario} from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  $modal = new EventEmitter<any>();

  private api: string = 'https://www.scorebat.com/video-api/v3/feed/?token="NDc2NDdfMTY3MzA0MjE3Ml9jMWIwYjQ2ODAyYjMzODA0OGFhODM4M2Y4MDA5YWNhNTY5YzgxNmRj"';

  private domain: string = "https://us-central1-casino-4e673.cloudfunctions.net/app";

  constructor(private httpClient: HttpClient) {

  }

  public getdeportes():Observable<any>{
    return this.httpClient.get<any>(this.api).pipe(map(res=>res));
  }

  getFormulario() {
    return this.httpClient.get<Usuario[]>(`${this.domain}/api/formulario`).pipe(map(res=>res));
  }

  addFormulario(newForm: Usuario) {
    return this.httpClient.post<Usuario>(`${this.domain}/api/formulario`, newForm).pipe(map(res=>res));
  }

  delateFormulario(id: any) {
    return this.httpClient.delete<Usuario>(`${this.domain}/api/formulario/${id}`).pipe(map(res=>res));
  }

  updateFormulario(newForm: Usuario) {
    return this.httpClient.put<Usuario>(`${this.domain}/api/formulario/${newForm.id}`, newForm).pipe(map(res=>res));
  }

}
