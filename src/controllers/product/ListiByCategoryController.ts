import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const categoryId = req.query.categoryId as string;

    const listByCategoryService = new ListByCategoryService();

    const products = await listByCategoryService.execute({
      categoryId,
    });

    return res.json(products);
  }
}

export { ListByCategoryController };
