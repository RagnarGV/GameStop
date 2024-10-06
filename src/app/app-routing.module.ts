import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'game-list/:category', component: GamesListComponent },
  { path: 'game-details', component: GameDetailsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
