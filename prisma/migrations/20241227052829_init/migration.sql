/*
  Warnings:

  - You are about to drop the column `cuisineType` on the `Resturant` table. All the data in the column will be lost.
  - You are about to drop the column `prepareTime` on the `Resturant` table. All the data in the column will be lost.
  - You are about to drop the column `resturantType` on the `Resturant` table. All the data in the column will be lost.
  - Added the required column `cuisine_type` to the `Resturant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prepare_time` to the `Resturant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resturant_type` to the `Resturant` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resturant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "resturant_type" TEXT NOT NULL,
    "cuisine_type" TEXT NOT NULL,
    "prepare_time" TEXT NOT NULL
);
INSERT INTO "new_Resturant" ("id", "image") SELECT "id", "image" FROM "Resturant";
DROP TABLE "Resturant";
ALTER TABLE "new_Resturant" RENAME TO "Resturant";
CREATE UNIQUE INDEX "Resturant_id_key" ON "Resturant"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
