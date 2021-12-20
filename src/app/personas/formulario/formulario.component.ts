import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  //* ATRIBUTOS
  // @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string = '';
  apellidoInput: string = '';
  // @ViewChild('nombreInput') nombre!: ElementRef;
  // @ViewChild('apellidoInput') apellido!: ElementRef;
  index!: number;
  editar!: number;

  //* CONSTRUCTOR
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Recibe la información de otro componente (Aquí sucede la comunicación entre componentes a través del servicio)
    // Nos suscribimos a la notificación que se está emitiendo. Nos suscribirmos al evento que se está emitiendo
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El índice es: ' + indice)
    );
  }

  //* ngOnInit
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    // Convertimos a número agregando el signo +
    this.editar = +this.route.snapshot.queryParams['modoEdicion'];

    // if (this.index) {
    if (this.editar === 1) {
      const persona: Persona = this.personasService.encontrarPersona(
        this.index
      );
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  //* MÉTODOS
  // agregarPersona(nombreInput: HTMLInputElement,apellidoInput: HTMLInputElement) {
  agregarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // const persona1 = new Persona(nombreInput.value, apellidoInput.value);
    /* const persona1 = new Persona(
      this.nombre.nativeElement.value,
      this.apellido.nativeElement.value
    ); */
    // this.personas.push(persona1);
    //this.personaCreada.emit(persona1);
    /* this.loggingService.enviaMensajeAConsola(
      'Persona agregada: ' + persona1.nombre + ' ' + persona1.apellido
    ); */
    // if (this.index) {
    if (this.editar === 1) {
      this.personasService.modificarPersona(this.index, persona1);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    this.personasService.eliminarPersona(this.index);
    this.router.navigate(['personas']);
  }
}
