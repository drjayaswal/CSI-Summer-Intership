const axios = require("axios");

exports.getWeather = async (req, res, next) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
    });
  } catch (error) {
    next(error); // pass to error handler
  }
};
