import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController
  ) {
    this.formRegister = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
    });
  }

  ngOnInit() {}
  register() {
    if (this.formRegister.valid) {
      this.authService.postRegister(this.formRegister.value).subscribe({
        next: () => {
          this.presentToast('bottom', 'Register successful!');
        },
        error: () => {
          this.presentToast('bottom', 'Register fail!');
        },
      });
      console.log('hai');
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
