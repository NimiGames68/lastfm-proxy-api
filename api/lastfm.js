export default async function handler(req, res) {
  const username = process.env.nimi_games68;
  const apiKey = process.env.7be9d9fa04a11fc997fdf69756441f02;

  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
  );

  const data = await response.json();

  res.status(200).json(data);
}
