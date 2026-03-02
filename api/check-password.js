export default function handler(req, res) {
  const SECRET = process.env.ADMIN_PASSWORD;

  if (req.method === "POST") {
    const { password } = req.body;

    if (password === SECRET) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ success: false });
    }
  }

  res.status(405).end();
}
