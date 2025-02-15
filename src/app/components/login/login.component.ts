import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { apiCall } from "../../utils/apiCall";
import { newUserData } from "../../types/globalTypes";
import { saveUserData } from "../../utils/userData";
import { Router } from "@angular/router";
import { AuthResponse } from "../../types/apiTypes";

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
  router = new Router();

  changePage(page: string) {
    this.currentPage = page;
  }

  handleLogin() {
    apiCall<AuthResponse>({
      path: "/users/auth-with-password",
      method: "POST",
      data: {
        identity: this.userData.email,
        password: this.userData.password,
      },
    }).then(async (resp) => {
      console.log("resp");
      this.authUser = resp;

      await saveUserData(resp);
      this.router.navigate(["/"]);
    });
  }

  get minPasswordLength(): boolean {
    return (
      this.userData.password.length >= 8 ||
      this.newUserData.password.length >= 8
    );
  }

  get validateLoginForm(): boolean {
    return (
      Object.values(this.userData).every((value) => value !== "") &&
      this.minPasswordLength
    );
  }

  // --- register

  newUserData: newUserData = {
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
      this.authUser = resp;

      this.userData.email = this.newUserData.email;
      this.userData.password = this.newUserData.password;
      this.handleLogin();
    });
  }

  get passwordMatches(): boolean {
    return this.newUserData.password === this.newUserData.passwordConfirm;
  }

  get validateRegisterForm(): boolean {
    return (
      Object.values(this.newUserData).every((value) => value !== "") &&
      this.passwordMatches
    );
  }
}
