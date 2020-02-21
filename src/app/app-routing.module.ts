import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { MainComponent } from './components/main/main.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  { path: "", redirectTo: 'user-portal', pathMatch: "full" },
  { path: "user-portal", component: MainComponent },
  { path: "create-user", component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
