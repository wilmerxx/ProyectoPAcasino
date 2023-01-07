import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  $modal = new EventEmitter<any>();

  private api = 'https://www.scorebat.com/video-api/v3/feed/?token="NDc2NDdfMTY3MzA0MjE3Ml9jMWIwYjQ2ODAyYjMzODA0OGFhODM4M2Y4MDA5YWNhNTY5YzgxNmRj"';



  constructor(private httpClient: HttpClient) {

  }

  public getdeportes():Observable<any>{
    return this.httpClient.get<any>(this.api);
  }



}
