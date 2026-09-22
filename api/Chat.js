export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests are allowed"
    });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    return res.status(200).json({
      reply: "J.A.R.V.I.S received: " + message
    });

  } catch (error) {
    return res.status(500).json({
      error: "J.A.R.V.I.S brain error"
    });
  }
}
