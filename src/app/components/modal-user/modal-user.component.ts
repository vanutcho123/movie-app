import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss'],
})
export class ModalUserComponent implements OnInit {
  name!: string;
  ngOnInit(): void {}
  constructor(private modalCtrl: ModalController, private router: Router) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
  logout() {
    this.modalCtrl.dismiss().then(() => {
      this.router.navigate(['/login']); // Chuyển trang sau khi đóng modal
    });
  }
}
