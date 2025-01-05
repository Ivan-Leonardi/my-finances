import Router from "@koa/router";
import {
    usersList,
    usersCreate,
    usersUpdate,
    usersRemove,
} from "./modules/users/index.js";

export const router = new Router();

router.get("/users", usersList);
router.post("/users", usersCreate);
router.put("/users/:id", usersUpdate);
router.get("/users/:id", usersRemove);
