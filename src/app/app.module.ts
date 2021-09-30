import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { MesSignetsComponent } from './mes-signets/mes-signets.component';

@NgModule({
	declarations: [AppComponent, MesSignetsComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, AuthModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
