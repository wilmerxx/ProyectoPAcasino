import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  form!: FormGroup;

  viewModal: boolean = false; //mostrar

  constructor(private modalSS: ServiceService, private formBuilder: FormBuilder) {
    this.buildForm();
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

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nameCtrl: new FormControl('', [Validators.required]),
      apellidoCtrl: new FormControl('', [Validators.required]),
      numCtrl: new FormControl('', [Validators.required]),
      dateCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      paisesCtrl: new FormControl('', [Validators.required]),
      genderCtrl: new FormControl('', [Validators.required]),
      terminosCtrl: new FormControl('', [Validators.required]),
      telefCtrl: new FormControl('', [Validators.required]),
      calleCtrl: new FormControl('', [Validators.required]),
      localidadCtrl: new FormControl('', [Validators.required]),
      ciudadCtrl: new FormControl('', [Validators.required])

    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value.nameCtrl);
      console.log(value.apellidoCtrl);
      console.log(value.numCtrl);
      console.log(value.dateCtrl);
      console.log(value.emailCtrl);
      console.log(value.paisesCtrl);
      console.log(value.terminosCtrl);
      console.log(value.telefCtrl);
      console.log(value.calleCtrl);
      console.log(value.localidadCtrl);
      console.log(value.ciudadCtrl);

    }else{
      this.form.markAllAsTouched();
      console.log('Los datos no estan llegando');
    }

  }

  get numCtrl(){
    return this.form.get('numCtrl');
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

}

