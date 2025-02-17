import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorizeLogoComponent } from './valorize-logo.component';

describe('ValorizeLogoComponent', () => {
  let component: ValorizeLogoComponent;
  let fixture: ComponentFixture<ValorizeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorizeLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorizeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
