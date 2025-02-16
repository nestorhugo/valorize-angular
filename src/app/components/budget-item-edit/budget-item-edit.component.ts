import { Component, Input } from "@angular/core";
import { userSingleBudget } from "../../types/apiTypes";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { InputNumber } from "primeng/inputnumber";
import { Button } from "primeng/button";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BudgetService } from "../../services/budget.service";
import { apiCall } from "../../utils/apiCall";
import { getUserData } from "../../utils/userData";

@Component({
  selector: "app-budget-item-edit",
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    InputNumber,
    Button,
    CurrencyPipe,
    CommonModule,
  ],
  templateUrl: "./budget-item-edit.component.html",
  styleUrl: "./budget-item-edit.component.scss",
})
export class BudgetItemEditComponent {
  @Input() budget!: userSingleBudget;
  budgetCopy!: userSingleBudget;
  userData = getUserData();

  ngOnInit() {
    this.budgetCopy = JSON.parse(JSON.stringify(this.budget)); // -> deepcopy
  }

  value: string = "";

  newExpense = {
    descricao: "",
    valor: 1,
  };

  get canAddNewExpense() {
    return this.newExpense.descricao !== "" && this.newExpense.valor > 0;
  }

  addNewExpense() {
    this.budgetCopy.gastos.push(this.newExpense);
    this.newExpense = {
      descricao: "",
      valor: 1,
    };
  }

  removeExpense(index: number) {
    this.budgetCopy.gastos.splice(index, 1);
  }

  get canUpdateBudget() {
    return this.budgetCopy.nome != "" && this.budgetCopy.lucro >= 0;
  }

  loadingCreate = false;
  constructor(private budgetService: BudgetService) {}

  updateBudget() {
    this.loadingCreate = true;
    const totalExpenses = this.budgetCopy.gastos.reduce(
      (acc, gasto) => acc + gasto.valor!,
      0
    );
    this.budgetCopy.valor_cobrado =
      totalExpenses * (this.budgetCopy.lucro / 100 + 1);

    this.budgetCopy.valor_lucro = this.budgetCopy.valor_cobrado - totalExpenses;

    apiCall({
      path: `/orcamentos/records/${this.budget.id}`,
      method: "PATCH",
      data: this.budgetCopy,
      config: {
        headers: {
          Authorization: this.userData?.token,
        },
      },
    }).finally(() => {
      this.loadingCreate = false;
      this.budgetService.loadBudgets();
    });
  }

  deleteBudget() {
    apiCall({
      path: `/orcamentos/records/${this.budget.id}`,
      method: "DELETE",
      data: this.budgetCopy,
      config: {
        headers: {
          Authorization: this.userData?.token,
        },
      },
    }).finally(() => {
      this.loadingCreate = false;
      this.budgetService.loadBudgets();
    });
  }
}
