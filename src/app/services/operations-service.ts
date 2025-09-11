import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../componentes/interfaces';
import { ReceveOperation } from '../componentes/interfaces';

@Injectable({
  providedIn: 'root'
})

export class OperationsService {

  private api = "http://127.0.0.1:8000/api/operation/"

  constructor(private http: HttpClient){}

  sendOperation(operation:Operation):Observable<ReceveOperation>{
  
    return this.http.post<ReceveOperation>(this.api,operation)
  }
 
}

  
