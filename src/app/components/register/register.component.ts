import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  acc: object = {};
  errMsg: string = '';
  isLoad: boolean = false;
  register: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });
  error: string = '';
  handle(): void {
    this.isLoad = true;
    if (this.register.valid === true) {
      this.acc = this.register.value;
      this._AuthService.register(this.acc).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this._Router.navigate(['/login']);
          }
        },
        error: (err) => {
          this.errMsg = err.error.message;
          this.isLoad = false;
        },
      });
    } else {
      this.error = 'please chech valid data';
    }
  }
}
