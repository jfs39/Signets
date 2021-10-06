import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MesSignetsComponent } from './mes-signets/mes-signets.component';
import { RegisterComponent } from './register/register.component';
import { AproposComponent } from './apropos/apropos.component';

@NgModule({
	declarations: [AppComponent, MesSignetsComponent, HomeComponent, RegisterComponent, LoginComponent, AproposComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebase)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
