import { Component } from '@angular/core';
import { Dealer } from '../../componentes/dealer/dealer';
import { Header } from "../../componentes/header/header";
import { Famed } from "../../componentes/famed/famed";

@Component({
  selector: 'app-dashboard',
  imports: [Dealer, Header, Famed],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
