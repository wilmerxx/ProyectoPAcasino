import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-comprobante-registro',
  templateUrl: './comprobante-registro.component.html',
  styleUrls: ['./comprobante-registro.component.scss']
})
export class ComprobanteRegistroComponent implements OnInit {


  form!: FormGroup;

  viewModal: boolean = false; //mostrar
  archivos: any= [];
  constructor(private modalSS: ServiceService, private formBuilder: FormBuilder) {
    this.buildForm();
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  subirArchivo(event: { target: { files: any[]; }; }): any{
     const archivo = event.target.files[0]
      this.archivos.push(archivo);
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
      userCtrl: new FormControl('', [Validators.required]),
      pasCtrl: new FormControl('', [Validators.required]),
      fileCtrl: new FormControl('', [Validators.required]),
      terminosCtrl: new FormControl('', [Validators.required]),


    });
  }

  save(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value.userCtrl);
      console.log(value.pasCtrl);
      console.log(value.fileCtrl);
      console.log(value.terminosCtrl);

    }else{
      this.form.markAllAsTouched();
      console.log('los datos no estan llegando');
    }

  }

  get userCtrl(){
    return this.form.get('userCtrl');
  }

  get pasCtrl(){
    return this.form.get('pasCtrl');
  }

  get fileCtrl(){
    return this.form.get('fileCtrl');
  }

  get terminosCtrl(){
    return this.form.get('terminosCtrl');
  }


}
