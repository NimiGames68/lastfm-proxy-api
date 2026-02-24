export default async function handler(req, res) {
  try {
    const username = process.env.LASTFM_USERNAME;
    const apiKey = process.env.LASTFM_API_KEY;

    if (!username || !apiKey) {
      return res.status(500).json({
        error: "Missing environment variables"
      });
    }

    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
    );

    const data = await response.json();

    return res.status(200).json(data);

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({
      error: "Server crashed",
      details: err.message
    });
  }
}
