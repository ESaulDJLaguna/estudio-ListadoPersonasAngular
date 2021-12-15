import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent {
  //* ATRIBUTOS
  @Input() persona!: Persona;
  @Input() indice!: number;

  //* CONSTRUCTOR
  constructor(private personasService: PersonasService) {}

  //* MÉTODOS
  emitirSaludo() {
    // Se envia la información a otro componente a través del servicio
    this.personasService.saludar.emit(this.indice);
  }
}
