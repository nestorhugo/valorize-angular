import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetClientViewComponent } from './budget-client-view.component';

describe('BudgetClientViewComponent', () => {
  let component: BudgetClientViewComponent;
  let fixture: ComponentFixture<BudgetClientViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetClientViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetClientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
