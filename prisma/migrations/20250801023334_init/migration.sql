/*
  Warnings:

  - You are about to drop the column `created_At` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updated_At` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `category_Id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `created_At` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updated_At` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `created_At` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_At` on the `users` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_Id_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "created_At",
DROP COLUMN "updated_At",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_Id",
DROP COLUMN "created_At",
DROP COLUMN "updated_At",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "created_At",
DROP COLUMN "updated_At",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
