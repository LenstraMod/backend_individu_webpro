-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productPrice" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
