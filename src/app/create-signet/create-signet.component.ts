import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
	selector: 'app-create-signet',
	templateUrl: './create-signet.component.html',
	styleUrls: ['./create-signet.component.css'],
})
export class CreateSignetComponent implements OnInit {
	addForm!: FormGroup;
	accountErrorMessage = '';
	hasError = false;
	user: firebase.User | null = null;

	constructor(private auth: AngularFireAuth, private router: Router, public db: AngularFireDatabase) {}

	ngOnInit(): void {
		this.addForm = new FormGroup({
			name: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
			link: new FormControl('', Validators.required),
		});
		this.auth.onAuthStateChanged((user) => {
			this.user = user;
		});
	}

	async onCreate() {
		//try {
		const { name, description, link } = this.addForm.value;
		const email = this.user?.email;

		this.db.list('Signets').push({ NomSignet: name, DescriptionSignet: description, Signet: link, UserEmail: email });
		//	} catch (error) {
		//const authError = error as firebase.auth.Error;
		//this.accountErrorMessage = this.convertMessage(authError.code);
		//		this.hasError = true;
		//	}
	}
}
