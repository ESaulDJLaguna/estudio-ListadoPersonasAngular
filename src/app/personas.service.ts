import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  //* ATRIBUTOS
  personas: Persona[] = [
    new Persona('Erik', 'Saul'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];
  // Atributo que se encargará de compartir información entre componentes
  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}

  //* MÉTODOS
  // Se encarga de agregar la nueva persona al arreglo de personas
  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola(
      'Agregar persona: ' + persona.nombre
    );
    this.personas.push(persona);
  }

  encontrarPersona(index: number) {
    const persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    // Como estamos utilizando referencias
    const persona1 = this.personas[index];
    // Podemos modificar el arreglo original
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
