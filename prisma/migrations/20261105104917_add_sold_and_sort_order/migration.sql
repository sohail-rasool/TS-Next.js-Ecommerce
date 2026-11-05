-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "DressStyle" ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Product_sold_idx" ON "Product"("sold");
