-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Food" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Food" ("id", "image", "name", "price", "rating") SELECT "id", "image", "name", "price", "rating" FROM "Food";
DROP TABLE "Food";
ALTER TABLE "new_Food" RENAME TO "Food";
CREATE UNIQUE INDEX "Food_id_key" ON "Food"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
