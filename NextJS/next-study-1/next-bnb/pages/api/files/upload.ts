import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";
import { createReadStream } from "fs";
import { v4 as uuidv4 } from "uuid";

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const form = new formidable.IncomingForm();
      const url = await new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files: any) => {
          const s3 = new aws.S3({
            accessKeyId: process.env.ACCESSKEY_ID,
            secretAccessKey: process.env.SECRET_ACCESSKEY_ID,
          });
          const stream = createReadStream(files.file.filepath);
          const originalFileName = files.file.originalFilename.split(".").shift();
          const fileExtension = files.file.originalFilename.split(".").pop();
          await s3.upload({
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: `${originalFileName}__${uuidv4()}.${fileExtension}`,
            ACL: "public-read",
            Body: stream,
          })
          .promise()
          .then((res) => resolve(res.Location))
          .catch((e) => reject(e));
        });
      });
      res.statusCode = 201;
      res.send(url);
    } catch (e) {
      console.log(e);
      res.end();
    }
  }
  res.statusCode = 405;
  return res.end;
};
