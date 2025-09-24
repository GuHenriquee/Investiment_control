import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Token de acesso não encontrado no localStorage!');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    });

    return this.http.post<ReceveOperation>(this.api, operation, { headers: headers });

  }
 
}

  
