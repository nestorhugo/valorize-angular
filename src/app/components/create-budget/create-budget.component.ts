import { Component } from "@angular/core";
import { Dialog } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-create-budget",
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule],
  templateUrl: "./create-budget.component.html",
  styleUrl: "./create-budget.component.scss",
})
export class CreateBudgetComponent {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
}
