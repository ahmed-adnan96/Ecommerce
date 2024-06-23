import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
Validators;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errMsg: string = '';
  isLoad: boolean = false;
  loginUser: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });

  handleLogin(detailslogin: FormGroup): void {
    if (detailslogin.status === 'VALID') {
      console.log(detailslogin);
      this.isLoad = true;
      this._AuthService.login(this.loginUser.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            localStorage.setItem('_Token2', res.token);
            this._Router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.log(err);
          this.errMsg = err.error.message;
          console.log(this.errMsg);
          this.isLoad = false;
        },
      });
    }
  }
}
