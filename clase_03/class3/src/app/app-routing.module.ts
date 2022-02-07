import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'games', component: GamesComponent},
  {path : 'game/:id', component: GamesComponent},
  {path : '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
