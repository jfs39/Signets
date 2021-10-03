import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'Signets';

	user: firebase.User | null = null;

	constructor(private auth: AngularFireAuth, private router: Router) {}

	ngOnInit(): void {
		this.auth.onAuthStateChanged((user) => {
			this.user = user;
		});
	}

	async onLogout() {
		await this.auth.signOut();
		//this.router.navigate(['login']);
	}
}
