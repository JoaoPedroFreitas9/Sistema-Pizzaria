import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListiByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import uploadConfig from "./config/multer";

const router = Router();
//-- MULTER --
const upload = multer(uploadConfig.upload("./tmp"));
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
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

//-- ROTAS ORDER --
router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);
export { router };
