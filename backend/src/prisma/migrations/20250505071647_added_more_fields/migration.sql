-- CreateEnum
CREATE TYPE "Language" AS ENUM ('Telugu', 'Hindi', 'English');

-- CreateEnum
CREATE TYPE "Facility" AS ENUM ('Apollo', 'Other');

-- CreateEnum
CREATE TYPE "ConsultMode" AS ENUM ('onlineVisit', 'hospitalVisit');

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "consultMode" "ConsultMode" NOT NULL DEFAULT 'hospitalVisit',
ADD COLUMN     "facility" "Facility" NOT NULL DEFAULT 'Apollo',
ADD COLUMN     "language" "Language" NOT NULL DEFAULT 'Hindi';
