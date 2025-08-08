import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

//--ROTAS USER--
router.post("/users", new CreateUserController().handle);
//--ROTAS AUTH--
router.post("/login", new AuthUserController().handle);
//--ROTAS DETAIL USER--
router.get("/me", isAuthenticated, new DetailUserController().handle);

//--ROTAS CATEGORY--
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
//--LIST CATEGORY--
router.get("/category", isAuthenticated, new ListCategoryController().handle);

//-- ROTAS PRODUCT --


export { router };
