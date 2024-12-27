-- CreateTable
CREATE TABLE "Resturant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "resturantType" TEXT NOT NULL,
    "cuisineType" TEXT NOT NULL,
    "prepareTime" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Resturant_id_key" ON "Resturant"("id");
