import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/main/components/user-list/user-list.component';
import { NavbarComponent } from './components/main/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateUserComponent,
    UserListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
