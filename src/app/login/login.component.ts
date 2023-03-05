import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Usuario} from '../Usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario[]=[];
  form!: FormGroup;
  email: any;
  pass: any ;
  user: any ;

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

  verificar(event:Event){
    event.preventDefault();
    this.email = this.form.value.emailCtrl;
    this.pass = this.form.value.passCtrl;
    this.user = this.service.getFormulario().subscribe(form => {
      this.usuario = form;
    });

    this.router.navigate(['/panel-cliente']);

  }

}
