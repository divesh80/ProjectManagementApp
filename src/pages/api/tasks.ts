import { type NextApiRequest, type NextApiResponse } from "next";
import { supabase } from "../../utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("Task").select("*");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { title, description, deadline, priority, assignedTo } = req.body as {
      title: string;
      description: string;
      deadline: string;
      priority: string;
      assignedTo: string;
    };
    const { data, error } = await supabase
      .from("Task")
      .insert([{ title, description, deadline, priority, assignedTo }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
