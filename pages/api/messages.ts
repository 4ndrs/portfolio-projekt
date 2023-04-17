import type { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    return res.status(200).json({ text: "Hello" });
  }

  return res.status(400).json({ error: "Bad Request" });
};

export default handler;
