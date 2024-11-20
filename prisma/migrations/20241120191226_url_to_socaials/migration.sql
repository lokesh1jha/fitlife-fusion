/*
  Warnings:

  - You are about to drop the column `facebook` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `tiktok` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `socialLink` table. All the data in the column will be lost.
  - You are about to drop the column `youtube` on the `socialLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "socialLink" DROP COLUMN "facebook",
DROP COLUMN "github",
DROP COLUMN "instagram",
DROP COLUMN "linkedin",
DROP COLUMN "tiktok",
DROP COLUMN "twitter",
DROP COLUMN "website",
DROP COLUMN "youtube",
ADD COLUMN     "facebookUrl" TEXT,
ADD COLUMN     "githubUrl" TEXT,
ADD COLUMN     "instagramUrl" TEXT,
ADD COLUMN     "linkedinUrl" TEXT,
ADD COLUMN     "tiktokUrl" TEXT,
ADD COLUMN     "twitterUrl" TEXT,
ADD COLUMN     "websiteUrl" TEXT,
ADD COLUMN     "youtubeUrl" TEXT;
