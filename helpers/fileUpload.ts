import formidable from "formidable";
import path from "path";
import fs from "fs";

export const uploadImage = async (file: formidable.File) => {
  // image.mv("@/public/upload/" + image.name);
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, file.newFilename);
  fs.mkdirSync("./public/uploads", { recursive: true });
  fs.copyFileSync(file.filepath, filePath);
  return file.newFilename;
};

export const uploadFile = async (file: formidable.File) => {
  // image.mv("@/public/upload/" + image.name);
  const uploadDir = path.join(process.cwd(), "public", "uploads", "files");
  const filePath = path.join(uploadDir, file.newFilename);
  fs.mkdirSync("./public/uploads/files", { recursive: true });
  fs.copyFileSync(file.filepath, filePath);
  return file.newFilename;
};

export const deleteFile = async (fileName: string) => {
  const dir = path.join(process.cwd(), "public", "uploads", "files");
  const filePath = path.join(dir, fileName);
  fs.rmSync(filePath);
};
