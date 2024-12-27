/*
  Warnings:

  - Added the required column `image` to the `Resturant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resturant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "resturantType" TEXT NOT NULL,
    "cuisineType" TEXT NOT NULL,
    "prepareTime" TEXT NOT NULL
);
INSERT INTO "new_Resturant" ("cuisineType", "id", "prepareTime", "resturantType") SELECT "cuisineType", "id", "prepareTime", "resturantType" FROM "Resturant";
DROP TABLE "Resturant";
ALTER TABLE "new_Resturant" RENAME TO "Resturant";
CREATE UNIQUE INDEX "Resturant_id_key" ON "Resturant"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
