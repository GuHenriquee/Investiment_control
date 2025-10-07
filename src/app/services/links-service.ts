import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  // ✅ CORREÇÃO 1: Declaramos a propriedade aqui, iniciando como null.
  private socket$: WebSocketSubject<any> | null = null;

  // ✅ CORREÇÃO 1: O construtor agora está vazio, pois não injetamos o socket.
  constructor() { }

  public connect(url: string): Observable<any> {
    // Se já houver uma conexão, fecha a anterior.
    if (this.socket$) {
      this.socket$.complete();
    }
    
    // ✅ CORREÇÃO 1: A instância do socket é CRIADA aqui, quando o método é chamado.
    this.socket$ = webSocket(url);
        
    return this.socket$.asObservable();
  }

  public sendMessage(message: any): void {
    if (this.socket$) {
      this.socket$.next(message);
    } else {
      console.error('WebSocket connection is not established.');
    }
  }

  public closeConnection(): void {
    if (this.socket$) {
      this.socket$.complete();
      // ✅ CORREÇÃO 2: Usamos '=' para atribuir null e limpar a referência.
      this.socket$ = null;
    }
  }
}