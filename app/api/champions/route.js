import axios from "axios";

export default async function handler(req, res) {
  const { data } = await axios.get(process.env.API_URI + "/champions");

  res.status(200).json(data);
}
