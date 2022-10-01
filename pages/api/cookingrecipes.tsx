import { NextApiRequest, NextApiResponse } from "next";
import query from "../../db/db.js";
export default async function cookingrecipes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let data = await query(`SELECT * FROM recipes`);
    res.json(data.rows);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
