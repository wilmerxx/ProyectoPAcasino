import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { ref, Storage, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {

  form!: FormGroup;
  files: string[];
  viewModal: boolean = false; //mostrar


  constructor(private modalSS: ServiceService, private formBuilder: FormBuilder, private router: Router, private storage: Storage) {
    this.buildForm();
    this.files = [];
  }

  ngOnInit() {
    this.getFile();
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  navegar(){
    this.router.navigate(['/']);
  }

  //SUBIR ARCHIVOS
  upload($event: any){
    const file =$event.target.files[0];

    const fileRef = ref(this.storage, `datos/${file.name}`);

    uploadBytes(fileRef, file)
      .then(response => {console.log(response)
        this.getFile();
      })
      .catch(error => console.log(error));

  }

  getFile(){
    const fileRef = ref(this.storage, 'datos');

    listAll(fileRef)
    .then(async response=> {
      console.log(response);

      this.files = [];

      for(let item of response.items){
        const url = await getDownloadURL(item);
        this.files.push(url);
      }
    }).catch(error=> console.log(error));
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
      passCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      telefCtrl: new FormControl('', [Validators.required]),
      localidadCtrl: new FormControl('', [Validators.required]),
      ciudadCtrl: new FormControl('', [Validators.required]),
      calleCtrl: new FormControl('', [Validators.required]),
      fileCtrl: new FormControl('', [Validators.required]),
      terminosCtrl: new FormControl('', [Validators.required]),
    });
  }


  save(event: Event){
//    event.preventDefault();
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


