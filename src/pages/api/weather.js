export default async function handler(req, res) {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "Input lokasi lebih dahulu!" });
  }

  try {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
      console.log(data);
    } else {
      res.status(400).json({ error: data.message });
      console.log(`Error: ${data.message}`);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
}
