import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalUserComponent } from 'src/app/components/modal-user/modal-user.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private modalController: ModalController) {}
  ngOnInit() {}

  async onShowModalUser() {
    const modal = await this.modalController.create({
      component: ModalUserComponent,
    });
    await modal.present();
  }
}
