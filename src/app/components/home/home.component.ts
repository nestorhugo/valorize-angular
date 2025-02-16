import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Router } from "@angular/router";
import { logout } from "../../utils/userData";
import { BudgetListComponent } from "../budget-list/budget-list.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { CreateBudgetComponent } from "../create-budget/create-budget.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    ButtonModule,
    BudgetListComponent,
    FormsModule,
    InputTextModule,
    CreateBudgetComponent,
    CreateBudgetComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  constructor(private router: Router) {}

  async logOut() {
    await logout();

    this.router.navigate(["/login"]);
  }

  searchValue = "";
}
