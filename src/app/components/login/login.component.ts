import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { apiCall } from "../../utils/apiCall";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  userData = {
    email: "",
    password: "",
  };
  authUser: any = null;
  currentPage = "login";

  changePage(page: string) {
    this.currentPage = page;
  }

  handleLogin() {
    apiCall({
      path: "/users/auth-with-password",
      method: "POST",
      data: {
        identity: this.userData.email,
        password: this.userData.password,
      },
    }).then((resp) => {
      console.log(resp);
      this.authUser = resp;
    });
  }

  // --- register

  newUserData = {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  };

  handleRegister() {
    apiCall({
      path: "/users/records",
      method: "POST",
      data: this.newUserData,
    }).then((resp) => {
      console.log(resp);
      this.authUser = resp;
    });
  }
}
