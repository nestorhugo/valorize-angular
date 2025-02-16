import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { apiCall } from "../utils/apiCall";
import { AuthResponse, budgetListResponse } from "../types/apiTypes";
import { getUserData } from "../utils/userData";

@Injectable({
  providedIn: "root",
})
export class BudgetService {
  private budgetsSubject = new BehaviorSubject<budgetListResponse | null>(null);
  budgets$ = this.budgetsSubject.asObservable();

  loadingBudgets = false;
  userData: AuthResponse | null = getUserData();

  loadBudgets() {
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
        this.budgetsSubject.next(resp as budgetListResponse);
      })
      .catch((error) => {
        // tratamento de erro
      })
      .finally(() => {
        this.loadingBudgets = false;
      });
  }
}
