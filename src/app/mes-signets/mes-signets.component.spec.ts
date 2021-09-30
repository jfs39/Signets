import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesSignetsComponent } from './mes-signets.component';

describe('MesSignetsComponent', () => {
	let component: MesSignetsComponent;
	let fixture: ComponentFixture<MesSignetsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MesSignetsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MesSignetsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
