import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	accountErrorMessage = '';
	hasError = false;

	constructor(private auth: AngularFireAuth, private router: Router) {}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
	}

	async onLogin() {
		try {
			const { email, password } = this.loginForm.value;

			await this.auth.signInWithEmailAndPassword(email, password);

			this.router.navigate(['/mesSignets']);
		} catch (error) {
			const authError = error as firebase.auth.Error;
			this.accountErrorMessage = this.convertMessage(authError.code);
			this.hasError = true;
		}
	}

	convertMessage(code: string): string {
		switch (code) {
			case 'auth/user-disabled': {
				return 'Sorry your user is disabled.';
			}
			case 'auth/user-not-found': {
				return 'Sorry user not found.';
			}
			case 'auth/invalid-email': {
				return "Désolé, l'adresse e-mail entrée est invalide ou vide.";
			}
			case 'auth/weak-password': {
				return 'Désolé, votre mot de passe est trop faible.';
			}
			case 'auth/email-already-in-use': {
				return 'Désolé, votre adresse E-mail est déjà utilisée.';
			}

			default: {
				return 'Login error try again later.';
			}
		}
	}
}
