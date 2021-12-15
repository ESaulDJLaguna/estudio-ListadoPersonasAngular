import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  //* ATRIBUTOS
  // @Output() personaCreada = new EventEmitter<Persona>();
  // nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('nombreInput') nombre!: ElementRef;
  @ViewChild('apellidoInput') apellido!: ElementRef;

  //* CONSTRUCTOR
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) {
    // Recibe la información de otro componente (Aquí sucede la comunicación entre componentes a través del servicio)
    // Nos suscribimos a la notificación que se está emitiendo. Nos suscribirmos al evento que se está emitiendo
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El índice es: ' + indice)
    );
  }

  //* MÉTODOS
  // agregarPersona(nombreInput: HTMLInputElement,apellidoInput: HTMLInputElement) {
  agregarPersona() {
    // const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // const persona1 = new Persona(nombreInput.value, apellidoInput.value);
    const persona1 = new Persona(
      this.nombre.nativeElement.value,
      this.apellido.nativeElement.value
    );
    // this.personas.push(persona1);
    //this.personaCreada.emit(persona1);
    /* this.loggingService.enviaMensajeAConsola(
      'Persona agregada: ' + persona1.nombre + ' ' + persona1.apellido
    ); */
    this.personasService.agregarPersona(persona1);
  }
}
