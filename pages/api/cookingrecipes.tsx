import { NextApiRequest, NextApiResponse } from "next";
import query from "../../db/db.js";
export default async function cookingrecipes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = await query(`SELECT * FROM recipes`);
  res.json(data);
  console.log(data);
}
