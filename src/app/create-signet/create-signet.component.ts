import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

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

	constructor(private auth: AngularFireAuth, private router: Router, public db: AngularFirestore) {}

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

		if (name != '' && description != '' && email != '' && link != '') {
			this.db.collection('Signets').add({ NomSignet: name, DescriptionSignet: description, Lien: link, UserEmail: email , SignetId: uuidv4(), UserId: this.user?.uid});
			this.router.navigate(['mesSignets']);
		}
	}
}
