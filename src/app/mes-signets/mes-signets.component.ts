import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-mes-signets',
	templateUrl: './mes-signets.component.html',
	styleUrls: ['./mes-signets.component.css'],
})
export class MesSignetsComponent implements OnInit {
	signets!: Observable<any[]>;
	editState: boolean = false;
	signetEnVue: boolean = false;
	signetAVoir: any;
	signetAEditer: any;
	//signets!: any[];

	constructor(private auth: AngularFireAuth, private router: Router, public db: AngularFirestore, private authService: AuthService) {}

	get user() {
		return this.authService.user;
	}

	ngOnInit(): void {
		const { email } = this.user;

		this.signets = this.db
			.collection('Signets', (ref) => {
				return ref.where('UserEmail', '==', email);
			})
			.valueChanges({ idField: 'id' });
	}

	deleteSignet(signet: any) {
		let signetADelete = this.db.collection('Signets').doc(signet.id);
		signetADelete.delete();
	}

	editSignet(signet: any) {
		if (!this.editState) {
			this.editState = true;
			this.signetAEditer = signet;
		} else {
			this.editState = false;
			this.signetAEditer = null;
		}
	}
	clearEditSignet() {
		this.editState = false;
		this.signetAEditer = null;
	}

	updateSignet(signet: any) {
		let signetAUpdate = this.db.collection('Signets').doc(signet.id);
		signetAUpdate.update(signet);
		this.clearEditSignet();
	}

	voirSignet(signet: any) {
		if (!this.signetEnVue) {
			this.signetEnVue = true;
			this.signetAVoir = signet;
		} else {
			this.signetEnVue = false;
			this.signetAVoir = null;
		}
	}
}
