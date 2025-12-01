import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-totem',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './totem.page.html',
  styleUrls: ['./totem.page.scss'],
})
export class TotemPage {
  ultima: string | null = null;

  constructor(private api: ApiService) {}

  emitir(tipo: 'SP' | 'SG' | 'SE') {
    this.api.emitir(tipo).subscribe(res => {
      this.ultima = res.codigo;
    });
  }
}
