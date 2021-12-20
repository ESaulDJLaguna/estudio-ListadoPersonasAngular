import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  //* ATRIBUTOS
  personas: Persona[] = [];

  //* CONSTRUCTOR
  constructor(
    private personasServices: PersonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personas = this.personasServices.personas.sort((a, b) => {
      let nameA = a.nombre.toUpperCase();
      let nameB = b.nombre.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  //* MÉTODOS
  /* personaAgregada(persona: Persona) {
    this.personasServices.agregarPersona(persona);
  } */
  agregar(): void {
    this.router.navigate(['personas/agregar']);
  }
}
