import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { apiCall } from "../../utils/apiCall";
import { AuthResponse, budgetListResponse } from "../../types/apiTypes";
import { getUserData } from "../../utils/userData";

@Component({
  selector: "app-budget-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./budget-list.component.html",
  styleUrl: "./budget-list.component.scss",
})
export class BudgetListComponent {
  budgets: budgetListResponse | null = null;
  userData: AuthResponse | null = null;
  loadingBudgets: boolean = false;

  ngOnInit() {
    this.userData = getUserData();
    this.loadingBudgets = true;
    apiCall({
      path: "/orcamentos/records",
      method: "GET",
      query: {
        filter: `(user='${this.userData?.record.id}')`,
      },
      config: {
        headers: {
          Authorization: this.userData?.token,
        },
      },
    })
      .then((resp) => {
        this.budgets = resp as budgetListResponse;
      })
      .finally(() => {
        this.loadingBudgets = false;
      });
  }
}
