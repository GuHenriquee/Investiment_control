import { Component } from '@angular/core';
import { Login } from "../login/login";

@Component({
  selector: 'app-header',
  imports: [Login],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
