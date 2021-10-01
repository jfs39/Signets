import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	constructor(private auth: AngularFireAuth, private router: Router) {}

	ngOnInit(): void {}

	title = 'Signets';

	async onLogout() {
		await this.auth.signOut();
		this.router.navigate(['login']);
	}
}
