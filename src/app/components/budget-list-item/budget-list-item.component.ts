import { Component, Input } from "@angular/core";
import { userSingleBudget } from "../../types/apiTypes";
import { Card } from "primeng/card";
import { CurrencyPipe } from "@angular/common";
import { Dialog } from "primeng/dialog";
import { BudgetItemEditComponent } from "../budget-item-edit/budget-item-edit.component";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-budget-list-item",
  standalone: true,
  imports: [Card, CurrencyPipe, Dialog, BudgetItemEditComponent, ButtonModule],
  templateUrl: "./budget-list-item.component.html",
  styleUrl: "./budget-list-item.component.scss",
})
export class BudgetListItemComponent {
  @Input() budget!: userSingleBudget;

  editVisible = false;

  toggleEditMenu() {
    this.editVisible = !this.editVisible;
  }

  get totalBudgetExpenses() {
    return this.budget.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }
}
