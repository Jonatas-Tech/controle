import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TotemPage } from './totem/totem.page';
import { AtendentePage } from './atendente/atendente.page';
import { PainelPage } from './painel/painel.page';

const routes: Routes = [
  { path: '', redirectTo: 'totem', pathMatch: 'full' },
  { path: 'totem', component: TotemPage },
  { path: 'atendente', component: AtendentePage },
  { path: 'painel', component: PainelPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
