import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import {Usuario} from '../Usuario';
@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss'],
  providers:[ServiceService]
})
export class FormularioRegistroComponent implements OnInit {

  form!: FormGroup;
  files: string[];
  viewModal: boolean = false; //mostrar
  usuario: Usuario[]=[];

  constructor(private modalSS: ServiceService, private formBuilder: FormBuilder) {
    this.buildForm();
    this.files = [];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

   //Mostrar - Ocultar componente
   showhide(){
    if(this.viewModal){
      this.viewModal = false;
    }else{
      this.viewModal = true;
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      paisesCtrl: new FormControl('', [Validators.required]),
      nameCtrl: new FormControl('', [Validators.required]),
      apellidoCtrl: new FormControl('', [Validators.required]),
      dateCtrl: new FormControl('', [Validators.required]),
      cedulaCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      telefCtrl: new FormControl('', [Validators.required]),
      localidadCtrl: new FormControl('', [Validators.required]),
      ciudadCtrl: new FormControl('', [Validators.required]),
      calleCtrl: new FormControl('', [Validators.required]),
      fileCtrl: new FormControl('', [Validators.nullValidator]),
      terminosCtrl: new FormControl('', [Validators.required]),

    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value.nameCtrl);
      console.log(value.apellidoCtrl);
      console.log(value.dateCtrl);
      console.log(value.emailCtrl);
      console.log(value.paisesCtrl);
      console.log(value.terminosCtrl);
      console.log(value.telefCtrl);
      console.log(value.calleCtrl);
      console.log(value.localidadCtrl);
      console.log(value.ciudadCtrl);
      console.log(value.fileCtrl);
      console.log(value.cedulaCtrl);
      console.log(value.passCtrl);
    }else{
      this.form.markAllAsTouched();
      console.log('Los datos no estan llegando');
    }

  }

  addFormulario(event: Event){
    event.preventDefault();
    const value = this.form.value;
    const newForm: Usuario ={
      id: value.cedulaCtrl,
      pais: value.paisesCtrl,
      nombre: value.nameCtrl,
      apellido: value.apellidoCtrl,
      date: value.dateCtrl,
      email: value.emailCtrl,
      telefono: value.telefCtrl,
      localidad: value.localidadCtrl,
      ciudad: value.ciudadCtrl,
      calle: value.calleCtrl,
      file: value.fileCtrl,
      cedula: value.cedulaCtrl,
      password: value.cedulaCtrl,
      terminos: false
    };
    this.modalSS.addFormulario(newForm)
    .subscribe( usuario =>{
      this.usuario.push(usuario);
      this.form.reset();
    })


  }
  get nameCtrl(){
    return this.form.get('nameCtrl');
  }

  get apellidoCtrl(){
    return this.form.get('apellidoCtrl');
  }

  get dateCtrl(){
    return this.form.get('dateCtrl');
  }

  get emailCtrl(){
    return this.form.get('emailCtrl');
  }

  get paisesCtrl(){
    return this.form.get('paisesCtrl');
  }

  get terminosCtrl(){
    return this.form.get('terminosCtrl');
  }

  get telefCtrl(){
    return this.form.get('telefCtrl');
  }
  get calleCtrl(){
    return this.form.get('calleCtrl');
  }
  get localidadCtrl(){
    return this.form.get('localidadCtrl');
  }
  get ciudadCtrl(){
    return this.form.get('ciudadCtrl');
  }

  get fileCtrl(){
    return this.form.get('fileCtrl');
  }

  get cedulaCtrl(){
    return this.form.get('cedulaCtrl');
  }
  get passCtrl(){
    return this.form.get('passCtrl');
  }

}

