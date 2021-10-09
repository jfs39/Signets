import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
	providedIn: 'root',
})
export class AuthService implements OnInit, OnDestroy {
	user!: firebase.User;

	private userSub;

	constructor(private auth: AngularFireAuth) {
		this.userSub = auth.user.subscribe((user) => {
			this.user = user!;
		});
	}

	ngOnInit(): void {
		this.auth.onAuthStateChanged((user) => {
			//this.user = user;
		});
	}

	ngOnDestroy(): void {
		this.userSub.unsubscribe();
	}

	async logout() {
		await this.auth.signOut();
	}
}
