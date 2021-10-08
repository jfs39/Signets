import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './apropos/apropos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MesSignetsComponent } from './mes-signets/mes-signets.component';
import { RegisterComponent } from './register/register.component';
import { CreateSignetComponent } from './create-signet/create-signet.component';

@NgModule({
	declarations: [AppComponent, MesSignetsComponent, HomeComponent, RegisterComponent, LoginComponent, AproposComponent, CreateSignetComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
