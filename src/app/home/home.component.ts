import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { logout } from "../utils/userData";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [ButtonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  constructor(private router: Router) {}

  async logOut() {
    await logout();

    this.router.navigate(["/login"]);
  }
}
