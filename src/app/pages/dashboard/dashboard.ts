import { Component } from '@angular/core';
import { Dealer } from '../../componentes/dealer/dealer';
import { Login } from "../../componentes/login/login";
import { Header } from "../../componentes/header/header";

@Component({
  selector: 'app-dashboard',
  imports: [Dealer, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
