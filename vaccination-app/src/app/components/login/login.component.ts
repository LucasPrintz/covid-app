import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mail = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.min(3)]);
  form: FormGroup = new FormGroup({
    mail: this.mail,
    password: this.password
  });
  hide = true;
  loginFailed = false;
  errorMessage = '';
  isSubmitted = false;
  
  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.router.navigate(['/search-vaccination-center']);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const mail = this.form.get('mail')!.value;
      const password = this.form.get('password')!.value;
  
      this.authService.login(mail, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
          this.router.navigate(['/search-vaccination-center'])
          .then(() => {
            window.location.reload();
          });
        },
        error: err => {
          this.loginFailed = true;
          this.errorMessage = err.error.message;
          this.isSubmitted = true;
        }
      });
    }

  }
  
}
