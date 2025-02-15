import { CanActivateFn, Router } from "@angular/router";
import { getUserData } from "../utils/userData";

export const authGuard: CanActivateFn = (route, state) => {
  const userData = getUserData();

  if (userData?.token) {
    return true;
  }

  const router = new Router();
  router.navigate(["/login"]);

  return false;
};

export const loggedGuard: CanActivateFn = (route, state) => {
  const userData = getUserData();

  if (!userData?.token) {
    return true;
  }

  const router = new Router();
  router.navigate(["/"]);

  return false;
};
