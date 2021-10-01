import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;

	constructor(private auth: AngularFireAuth, private router: Router) {}

	async onLogin() {
		const { email, password } = this.loginForm.value;

		await this.auth.signInWithEmailAndPassword(email, password);
		this.router.navigate(['']);
	}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
		});
	}
}
