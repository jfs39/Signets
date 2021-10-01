import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	profileForm!: FormGroup;

	constructor(private auth: AngularFireAuth, private router: Router) {}

	async createUser() {
		const { email, password } = this.profileForm.value;

		const user = await this.auth.createUserWithEmailAndPassword(email, password);
		this.router.navigate(['']);
	}

	ngOnInit(): void {
		this.profileForm = new FormGroup({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
			firstname: new FormControl('', Validators.required),
			lastname: new FormControl('', Validators.required),
		});
	}
}
