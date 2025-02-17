import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ValorizeLogoComponent } from "../valorize-logo/valorize-logo.component";
import { logout } from "../../utils/userData";

@Component({
  selector: "app-header-menu",
  standalone: true,
  imports: [ButtonModule, RouterModule, ValorizeLogoComponent],
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.scss"],
})
export class HeaderMenuComponent {
  constructor(private router: Router) {}

  logout() {
    logout();
    this.router.navigate(["/login"]);
  }
}
