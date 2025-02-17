import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { apiCall } from "../../utils/apiCall";
import { userSingleBudget } from "../../types/apiTypes";
import { CommonModule, DatePipe, JsonPipe } from "@angular/common";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";

@Component({
  selector: "app-budget-client-view",
  standalone: true,
  imports: [DatePipe, CardModule, CommonModule, DividerModule],
  templateUrl: "./budget-client-view.component.html",
  styleUrl: "./budget-client-view.component.scss",
})
export class BudgetClientViewComponent {
  constructor(private route: ActivatedRoute) {}

  id = "";
  budget: userSingleBudget | null = null;
  notFound = false;

  ngOnInit() {
    this.id = this.route.snapshot.queryParams["id"];

    apiCall({
      path: `/orcamentos/records/${this.id}`,
      method: "GET",
    })
      .then((resp) => {
        console.log(resp);
        this.budget = resp as userSingleBudget;
      })
      .catch(() => {
        this.notFound = true;
      });
  }
}
