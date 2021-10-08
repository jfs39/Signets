import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSignetComponent } from './create-signet.component';

describe('CreateSignetComponent', () => {
  let component: CreateSignetComponent;
  let fixture: ComponentFixture<CreateSignetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSignetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSignetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
