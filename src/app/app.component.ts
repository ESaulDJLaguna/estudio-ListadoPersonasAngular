import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //* ATRIBUTOS
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  //* CONSTRUCTOR
  constructor(private personasServices: PersonasService) {}

  ngOnInit(): void {
    this.personas = this.personasServices.personas;
  }

  //* MÉTODOS
  /* personaAgregada(persona: Persona) {
    this.personasServices.agregarPersona(persona);
  } */
}
