// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import formData from "@/helpers/formData";
import type { NextApiRequest, NextApiResponse } from "next";
import { TeacherController } from "@/controllers/TeacherController";
import { uploadFile } from "@/helpers/fileUpload";
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
  if (data.files.image) {
    const fileName = await uploadFile(data.files.image);
    data.fields.image = fileName;
  }

  const teacher = await TeacherController.create(data.fields);
  res.status(200).send({
    success: true,
    msg: "Teacher created successfully",
    data: teacher,
  });
}
