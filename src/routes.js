import Router from "@koa/router";
import {
    usersList,
    usersCreate,
    usersUpdate,
    usersRemove,
} from "./modules/users";

export const router = new Router();

router.get("/users", usersList);
router.post("/users", usersCreate);
router.put("/users/:id", usersUpdate);
router.get("/users/:id", usersRemove);
