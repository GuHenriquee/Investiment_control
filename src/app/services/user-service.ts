import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../componentes/interfaces';
import { CreateAccount } from '../componentes/create-account/create-account'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://sua-api.com/users'; // URL do seu backend

  constructor(private http: HttpClient) { }

  // Este método recebe os dados do formulário e retorna um Observable
  // A resposta do backend DEVE ser um objeto User completo (com id, etc)
  register(userData: CreateAccount): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }
}