import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient } from "@angular/common/http";
import { Response } from "../model/response";

@Injectable()
export class MongoService {
  baseUrl = "http://localhost:3015/"
  generalResponse : Response;
  private updateMethod = new BehaviorSubject<boolean>(false);
  public updateMethodObservable = this.updateMethod.asObservable();

  constructor(private http: HttpClient) { }

  update(payload: any[]){

    this.http
    .post<Response>(
      this.baseUrl + 'update_qty',
      payload,
      { headers: { "Content-Type": "application/json" } }
    )
    .subscribe(data => {
      this.generalResponse = data;
      this.updateMethod.next(true);
    })

    this.http
    .post<Response>(
      this.baseUrl + 'registry_sale',
      JSON.stringify(payload),
      { headers: { "Content-Type": "application/json" } }
    )
    .subscribe(data => {
      this.generalResponse = data;
      this.updateMethod.next(true);
    })
  }
  
}
