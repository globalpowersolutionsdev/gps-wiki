const VALID_CODES = {
  ADM: ["111-222"],
  CMP: ["444-555"],
  COM: ["777-888"],
  INV: ["123-456"],
  QA:  ["000-111", "555-666"]
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { type, password, prefix, code } = req.body;

  // Main Login Check
  if (type === "login") {
    if (password === process.env.ADMIN_PASSWORD) {
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false });
  }

  // Department Code Check
  if (type === "dept") {
    if (
      VALID_CODES[prefix] &&
      VALID_CODES[prefix].includes(code)
    ) {
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false });
  }

  return res.status(400).end();
}
