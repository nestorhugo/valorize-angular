import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { BudgetListComponent } from "../budget-list/budget-list.component";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { CreateBudgetComponent } from "../create-budget/create-budget.component";
import { HeaderMenuComponent } from "../header-menu/header-menu.component";

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
    HeaderMenuComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
