import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { CreateSignetComponent } from './create-signet/create-signet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MesSignetsComponent } from './mes-signets/mes-signets.component';
import { RegisterComponent } from './register/register.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
	{
		path: 'mesSignets',
		component: MesSignetsComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'apropos', component: AproposComponent },
	{ path: 'create', component: CreateSignetComponent },
	{ path: '', component: HomeComponent },
	{ path: '**', component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
