// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.redirect(
    `https://app.caisy.io/app/project/home?project_id=${process.env.CAISY_PROJECT_ID}&verify_template_setup=true`
  );
}
