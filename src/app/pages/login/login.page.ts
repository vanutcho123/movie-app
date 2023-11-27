import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    this.formLogin = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {}
  login() {
    if (this.formLogin.valid) {
      this.authService.postRegister(this.formLogin.value).subscribe({
        next: () => {
          this.presentToast('bottom', 'Login successful!');
        },
        error: () => {
          this.presentToast('bottom', 'Login fail!');
        },
      });
    }
  }
  async presentToast(position: 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
