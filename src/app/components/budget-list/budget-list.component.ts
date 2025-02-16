import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { apiCall } from "../../utils/apiCall";
import { AuthResponse, budgetListResponse } from "../../types/apiTypes";
import { getUserData } from "../../utils/userData";
import { BudgetListItemComponent } from "../budget-list-item/budget-list-item.component";
import { ProgressSpinner } from "primeng/progressspinner";
import { BudgetService } from "../../services/budget.service";

@Component({
  selector: "app-budget-list",
  standalone: true,
  imports: [CommonModule, BudgetListItemComponent, ProgressSpinner],
  templateUrl: "./budget-list.component.html",
  styleUrl: "./budget-list.component.scss",
})
export class BudgetListComponent {
  budgets: budgetListResponse | null = null;
  userData: AuthResponse | null = null;
  loadingBudgets: boolean = false;

  constructor(public budgetService: BudgetService) {}

  ngOnInit() {
    this.budgetService.loadBudgets();
  }
}
