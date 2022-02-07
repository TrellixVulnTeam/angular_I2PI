import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pathgot', loadChildren: () => import('./gameofthrone/gameofthrone.module').then(m => m.GameofthroneModule) }, { path: 'pathharrypotter', loadChildren: () => import('./harrypotter/harrypotter.module').then(m => m.HarrypotterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
