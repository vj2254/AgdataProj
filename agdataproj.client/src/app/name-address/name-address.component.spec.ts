import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAddressComponent } from './name-address.component';

describe('NameAddressComponent', () => {
  let component: NameAddressComponent;
  let fixture: ComponentFixture<NameAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
