import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
@Component({
	selector: 'app-modifier-user',
	templateUrl: './modifier-user.component.html',
	styleUrls: ['./modifier-user.component.css'],
})
export class ModifierUserComponent implements OnInit {
	setUserForm!: FormGroup;
	setUserFormPassword!: FormGroup;
	editState: boolean = false;
	editStatePassword: boolean = false;
	authentication = firebase.auth();
	accountMessage = '';
	hasStatusEmail = false;
	

	constructor(private router: Router, private db: AngularFirestore) {}

	ngOnInit(): void {
		this.setUserForm = new FormGroup({
			email: new FormControl('', Validators.required),
		});

		this.setUserFormPassword = new FormGroup({
			password: new FormControl('', Validators.required),
		});
	}
	async changeEmail() {

		const { email } = this.setUserForm.value;

		let regexp = new RegExp(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);

		try {
			if (regexp.test(email) && email.length != 0) {
				await this.authentication.currentUser?.updateEmail(email);
				this.hasStatusEmail= true;
				this.accountMessage= "L'adresse E-mail a été changée avec succès pour: "+ email;
			}
		} catch (error) {
			this.hasStatusEmail= true;
			this.accountMessage= ""+ error;
		}
	}

	async deleteAccount(){
		if(confirm("Etes-vous certains de vouloir supprimer votre compte?")){
			console.log("deleted");
		}
	
	}
	async changePassword() {
		const { password } = this.setUserFormPassword.value;
		try {
			if(password.length != 0) {
				await this.authentication.currentUser?.updatePassword(password);
			}
		} catch (error) {}
	}
	setEditState() {
		if (!this.editState) {
			this.editState = true;
		} else {
			this.editState = false;
		}
	}
	setEditStatePassword() {
		if (!this.editStatePassword) {
			this.editStatePassword = true;
		} else {
			this.editStatePassword = false;
		}
	}
}
