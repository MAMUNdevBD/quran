// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import formData from "@/helpers/formData";
import type { NextApiRequest, NextApiResponse } from "next";
import { uploadFile } from "../../../../helpers/fileUpload";
import { LessonController } from "@/controllers/LessonController";
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: any = await formData(req);

  const lesson = await LessonController.create(data.fields);
  res.status(200).send({
    success: true,
    msg: "Lesson created successfully",
    data: lesson,
  });
}
