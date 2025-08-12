import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ order_id, product_id, amount }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        order_Id: order_id,
        product_Id: product_id,
        amount,
      },
    });
    return order;
  }
}

export { AddItemService };
