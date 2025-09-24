import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../componentes/interfaces';
import { Login } from '../componentes/login/login';
import { Token } from '../componentes/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiCreateUser = 'http://127.0.0.1:8000/api/register/'; // URL do seu backend
  private apiLogin = 'http://127.0.0.1:8000/api/login/';

  constructor(private http: HttpClient) { }

  // Este método recebe os dados do formulário e retorna um Observable
  // A resposta do backend DEVE ser um objeto User completo (com id, etc)
  register(userData: User): Observable<User> {
    return this.http.post<User>(this.apiCreateUser, userData);
  }

  login(loginData: Login): Observable<Token>{
    return this.http.post<Token>(this.apiLogin, loginData);
  }
}