import { Component } from '@angular/core';
import { Dealer } from "../dealer/dealer";

@Component({
  selector: 'app-dashboard',
  imports: [Dealer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
