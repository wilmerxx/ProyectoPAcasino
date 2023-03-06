import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Usuario} from '../Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, Validators {
  usuario: Usuario[]=[];
  form!: FormGroup;
  email: any;
  pass: any ;
  user: any ;
  validateIfTrue: any;

  constructor(private service: ServiceService, private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal(): void {
    this.service.$modal.emit(false);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  login(){
    const user = {email: this.email, password: this.pass};
    this.service.login(user).subscribe( data => {
      console.log(data);
    });
    this.router.navigate(['/panel-cliente']);
  }

  verificar(event:Event){
    event.preventDefault();
    this.email = this.form.value.emailCtrl;
    this.pass = this.form.value.passCtrl;
    this.user = this.service.getFormulario().subscribe(form => {
      this.usuario = form;
    });

  }
  onSubmit() {
    if (this.email === 'email' && this.pass === 'pass') {
      // Permitir el acceso al sistema
    } else {
      // Mostrar mensaje de error
    }
  }


}
  function validate(email: any, AbstractControl: any) {
    throw new Error('Function not implemented.');
  }

