import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirmarPassword'].value ? null : {'mismatch': true};
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario enviado', this.registroForm.value);
      // Aquí iría la lógica para enviar los datos a un servidor, por ejemplo.
      // ...

      // Después de enviar los datos, redirige al usuario al inicio de sesión
      this.router.navigate(['']); // Asegúrate de que la ruta '/login' esté definida en tu configuración de rutas
    }
  }

}

