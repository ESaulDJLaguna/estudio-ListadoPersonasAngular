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
    this.personasServices.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasServices.setPersonas(personas);
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
