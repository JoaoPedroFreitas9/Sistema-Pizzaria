import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//--ROTAS USER--
router.post("/users", new CreateUserController().handle);
//--ROTAS AUTH--
router.post("/login", new AuthUserController().handle);
//--ROTAS DETAIL USER--
router.get("/me", isAuthenticated, new DetailUserController().handle);

export { router };
