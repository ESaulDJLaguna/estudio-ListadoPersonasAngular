import { Injectable, EventEmitter } from '@angular/core';
import { DataService } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  //* ATRIBUTOS
  personas: Persona[] = [];
  // Atributo que se encargará de compartir información entre componentes
  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataService: DataService
  ) {}

  //* MÉTODOS
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  obtenerPersonas() {
    return this.dataService.cargarPersonas();
  }

  // Se encarga de agregar la nueva persona al arreglo de personas
  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola(
      'Agregar persona: ' + persona.nombre
    );
    if (this.personas === null) {
      this.personas = [];
    }
    // Agregamos la información al arreglo que se muestra en la aplicación
    this.personas.push(persona);
    // Agregamos las personas en firebase
    this.dataService.guardarPersonas(this.personas);
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
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    // Se vuelve a guardar el arreglo para regenerar los índices en la BD
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas !== null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
