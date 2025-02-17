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

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private firstLoad = true;

  loadBudgets(clearData: boolean = false) {
    this.loadingSubject.next(true);

    // Limpa os dados se for primeiro acesso ou se clearData for true
    if (this.firstLoad || clearData) {
      this.budgetsSubject.next(null);
      this.firstLoad = false;
    }

    const userData = getUserData();

    apiCall({
      path: "/orcamentos/records",
      method: "GET",
      query: {
        filter: `(user='${userData?.record.id}')`,
      },
      config: {
        headers: {
          Authorization: userData?.token,
        },
      },
    })
      .then((resp) => {
        this.budgetsSubject.next(resp as budgetListResponse);
      })
      .finally(() => {
        this.loadingSubject.next(false);
      });
  }
}
