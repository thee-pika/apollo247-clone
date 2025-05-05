-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialist" TEXT NOT NULL,
    "fees" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "experienceFields" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "patientsCount" INTEGER NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);
