import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaDenunciaComponent } from './components/content/nueva-denuncia/nueva-denuncia.component';
import { AyudaComponent } from './components/content/ayuda/ayuda.component';

const routes: Routes = [
  {path: 'nueva-denuncia', component: NuevaDenunciaComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: '', redirectTo: '/ayuda', pathMatch: 'full'},
  {path: '**', component: AyudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
