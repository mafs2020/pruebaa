import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

function comparePasswordF(c: AbstractControl): { [key: string]: boolean } | null {
  const password = c.get('password');
  const passwordConfirm = c.get('passwordDos');
  console.log('password?.value == passwordConfirm?.value :>> ', password?.value == passwordConfirm?.value);
  if( password?.value === passwordConfirm?.value ){
    return null;
  }
  return {'diferente': true};
}

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  formulario!: FormGroup;
  register: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void {
    this.formulario = this.fb.group({
      nombre: ['', {
        // updateOn: 'blur',
        validators: Validators.required,
      }],
      comparePassword: this.fb.group({
        password: ['', {
          validators: Validators.required,
          // asyncValidators: []
        }],
        passwordDos: ['', Validators.required],
      // }, {validators: comparePasswordF} )
      })
    });
  }


  get nombreControl(): AbstractControl {
    return this.formulario.get('nombre')!;
  }

  get passwordControl(): AbstractControl {
    console.log('passwordControl', this.formulario.get('comparePassword.passwordDos')!.hasError('diferente'));
    return this.formulario.get('comparePassword.password')!;
  }
  get passwordControlDos(): AbstractControl {
    console.log('dirty', this.formulario.get('comparePassword.passwordDos')!.dirty);
    console.log('pristine', this.formulario.get('comparePassword.passwordDos')!.pristine);
    console.log('passwordControlDos', this.formulario.get('comparePassword.passwordDos')!.hasError('diferente'));
    return this.formulario.get('comparePassword.passwordDos')!;
  }

  get passwords(): AbstractControl {
    console.log(this.formulario.get('comparePassword')!.errors);
    return this.formulario.get('comparePassword')!;
  }
  
  cambiar(): void {
    this.formulario.patchValue({
      nombre: '',
      comparePassword: {
        password: '',
        passwordDos: ''
      }
    });
    this.formulario.reset();
    this.register= !this.register;
    console.log('this.register :>> ', this.register);
    if(this.register) {
      this.formulario.get('comparePassword')?.setValidators(comparePasswordF);
      this.formulario.get('comparePassword.passwordDos')?.setValidators(Validators.required)
      this.formulario.updateValueAndValidity();
    } else {
      // this.formulario?.clearValidators();
      this.formulario.get('comparePassword.passwordDos')?.clearValidators();
      this.formulario?.get('comparePassword')?.clearValidators();
      this.formulario?.updateValueAndValidity();
    }

  }
}
