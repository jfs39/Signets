import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	profileForm!: FormGroup;
	accountErrorMessage = '';
	hasError = false;
	constructor(private auth: AngularFireAuth, private router: Router,private db: AngularFirestore) {}

	ngOnInit(): void {
		this.profileForm = new FormGroup({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
			firstname: new FormControl('', Validators.required),
			lastname: new FormControl('', Validators.required),
		});
	}

	 convertMessage(code: string): string {
		 
		switch (code) {
			case 'auth/user-disabled': {
				return 'Sorry your user is disabled.';
			}
			case 'auth/user-not-found': {
				return 'Sorry user not found.';
			}
			case 'auth/invalid-email':{
				return 'Désolé, adresse E-mail invalide ou vide';
			}
			case 'auth/weak-password':{
				return 'Désolé, votre mot de passe est trop faible.';
			}
			case 'auth/email-already-in-use':{
				return 'Désolé, votre adresse E-mail est déjà utilisée.';
			}

			default: {
				return 'Login error try again later.';
			}
		}
	}

	async createUser() {
		const { email, password } = this.profileForm.value;
		try{
			const user = await this.auth.createUserWithEmailAndPassword(email, password);
			this.router.navigate(['']);
		}catch(error){
			const authError = error as firebase.auth.Error;
			this.accountErrorMessage = this.convertMessage(authError.code);
			this.hasError = true;

		}
	}
}
