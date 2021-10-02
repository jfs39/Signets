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
	accountErrorMessage = '';
	constructor(private auth: AngularFireAuth, private router: Router) {}

	ngOnInit(): void {
		this.profileForm = new FormGroup({
			email: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),
			firstname: new FormControl('', Validators.required),
			lastname: new FormControl('', Validators.required),
		});
	}

	async createUser() {
		const { email, password } = this.profileForm.value;

		const user = await this.auth.createUserWithEmailAndPassword(email, password);
		this.router.navigate(['']);
		/*.catch(error){
			switch (error.code) {
			  case "auth/invalid-email":
			  case "auth/wrong-password":
			  case "auth/user-not-found":
			  {
				 this.accountErrorMessage = "Wrong email address or password.";
				 break;
			  }
				 default:
			  {
				  this.accountErrorMessage = "Unexpected Error";
				  break;
			  }
		 }*/
	}
}
