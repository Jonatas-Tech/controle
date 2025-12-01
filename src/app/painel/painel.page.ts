import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit {
  chamadas: string[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.carregar();
    setInterval(() => this.carregar(), 2000);
  }

  carregar() {
    this.api.painel().subscribe(res => {
      this.chamadas = res;
    });
  }
}
