import { LinksService } from '../../services/links-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-famed',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './famed.html',
  styleUrl: './famed.css'
})
export class Famed implements OnInit, OnDestroy {
  title = 'angular-websocket-example';
  
  // Array para armazenar as mensagens recebidas do servidor
  public cryptoList: any[] = [];
  
  // Subject para gerenciar a desinscrição (cleanup) e evitar memory leaks
  private unsubscribe$ = new Subject<void>();

  constructor(private binanceWebSocket: LinksService) {}

 ngOnInit(): void {
  const url = 'ws://127.0.0.1:8000/ws/btc,eth,sol,xrp,bnb/usdt'; // Sua URL

  this.binanceWebSocket.connect(url)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (updatedCrypto) => { 
        
        const index = this.cryptoList.findIndex(cryptoAlredyInList => cryptoAlredyInList.symbol === updatedCrypto.symbol);
        //Se true retorna a posição verdadeira, se false retorna -1

        let newCryptoList = [...this.cryptoList]; 
        //copia os dados em outra lista

        if (index > -1) {
          // Garante que o objeto encontrado na posição index esteja sempre na mesma posição
          newCryptoList[index] = updatedCrypto;
        } else {
          // Se a cripto é nova, a adicionamos à cópia da lista
          newCryptoList.push(updatedCrypto);
        }

        // Atribuímos a lista totalmente nova e atualizada à nossa propriedade principal
        this.cryptoList = newCryptoList;
      },
      error: (err) => console.error('WebSocket error:', err),
      complete: () => console.log('WebSocket connection closed')
    });
}

  // Este método é crucial para limpar a inscrição quando o componente for destruído
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.binanceWebSocket.closeConnection();
  }
}