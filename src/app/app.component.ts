import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //* ATRIBUTOS
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  isAutenticado(): boolean {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}
