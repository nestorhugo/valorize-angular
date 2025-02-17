import { Component } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputNumber } from "primeng/inputnumber";
import { FormsModule } from "@angular/forms";
import { CommonModule, JsonPipe } from "@angular/common";
import { getUserData } from "../../utils/userData";
import { Budget } from "../../types/globalTypes";
import { apiCall } from "../../utils/apiCall";
import { BudgetService } from "../../services/budget.service";

@Component({
  selector: "app-create-budget",
  standalone: true,
  imports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    InputNumber,
    FormsModule,
  ],
  templateUrl: "./create-budget.component.html",
  styleUrl: "./create-budget.component.scss",
})
export class CreateBudgetComponent {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  newExpense = {
    descricao: "",
    valor: 1,
  };

  addNewExpense() {
    this.newBudget.gastos.push(this.newExpense);
    this.newExpense = {
      descricao: "",
      valor: 1,
    };
  }

  get canAddNewExpense() {
    return this.newExpense.descricao !== "" && this.newExpense.valor > 0;
  }

  removeExpense(index: number) {
    this.newBudget.gastos.splice(index, 1);
  }

  get canCreateBudget() {
    return this.newBudget.nome != "" && this.newBudget.lucro >= 0;
  }

  userData = getUserData();

  newBudget: Budget = {
    nome: "",
    lucro: 20,
    valor_cobrado: 0,
    valor_lucro: 0,
    gastos: [],
    user: this.userData!.record.id,
  };

  loadingCreate = false;
  constructor(private budgetService: BudgetService) {}

  createNewBudget() {
    this.loadingCreate = true;
    const totalExpenses = this.newBudget.gastos.reduce(
      (acc, gasto) => acc + gasto.valor!,
      0
    );
    this.newBudget.valor_cobrado =
      totalExpenses * (this.newBudget.lucro / 100 + 1);

    this.newBudget.valor_lucro = this.newBudget.valor_cobrado - totalExpenses;

    apiCall({
      path: "/orcamentos/records",
      method: "POST",
      data: this.newBudget,
      config: {
        headers: {
          Authorization: this.userData?.token,
        },
      },
    }).finally(() => {
      this.loadingCreate = false;
      this.visible = false;
      this.budgetService.loadBudgets();
    });
  }
}
