import { Component, Input } from "@angular/core";
import { userSingleBudget } from "../../types/apiTypes";
import { Card } from "primeng/card";

@Component({
  selector: "app-budget-list-item",
  standalone: true,
  imports: [Card],
  templateUrl: "./budget-list-item.component.html",
  styleUrl: "./budget-list-item.component.scss",
})
export class BudgetListItemComponent {
  @Input() budget!: userSingleBudget;
}
