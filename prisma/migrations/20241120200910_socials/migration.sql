/*
  Warnings:

  - You are about to drop the column `githubUrl` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `linkedinUrl` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `websiteUrl` on the `socialLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "socialLink" DROP COLUMN "githubUrl",
DROP COLUMN "linkedinUrl",
DROP COLUMN "websiteUrl";
