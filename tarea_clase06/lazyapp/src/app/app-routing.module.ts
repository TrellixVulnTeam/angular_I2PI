import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dogs', loadChildren: () => import('./dogs/dogs.module').then(m => m.DogsModule) }, 
  { path: 'paises', loadChildren: () => import('./paises/paises.module').then(m => m.PaisesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
