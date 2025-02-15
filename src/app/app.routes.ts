import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { authGuard, loggedGuard } from "./guards/auth.guard";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [authGuard] },
  { path: "login", component: LoginComponent, canActivate: [loggedGuard] },
];
