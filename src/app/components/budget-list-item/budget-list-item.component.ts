import { Component, Input } from "@angular/core";
import { userSingleBudget } from "../../types/apiTypes";
import { Card } from "primeng/card";
import { CurrencyPipe, JsonPipe } from "@angular/common";

@Component({
  selector: "app-budget-list-item",
  standalone: true,
  imports: [Card, CurrencyPipe],
  templateUrl: "./budget-list-item.component.html",
  styleUrl: "./budget-list-item.component.scss",
})
export class BudgetListItemComponent {
  @Input() budget!: userSingleBudget;

  ngOnInit() {
    console.log(this.budget.gastos);
  }

  get totalBudgetExpenses() {
    return this.budget.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }
}
