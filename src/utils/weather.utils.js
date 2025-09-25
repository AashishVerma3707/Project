export const getDay = (date = new Date(), dayStringFormat = "long") => {
  let reqDate = new Date();
  if (date) {
    reqDate = new Date(date);
  }
  const dayName = reqDate.toLocaleDateString("en-US", {
    weekday: dayStringFormat,
  });
  return dayName;
};

export const getTime = (time) => {
  const date = new Date(time);
  const time12hr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return time12hr;
};

export const getDate = (time) => {
  const date = new Date(time);

  const formattedDateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDateString;
};

export const transformWeatherData = ({ weatherData, location }) => {
  if (!weatherData) return;
  const { current, current_units, daily, hourly } = weatherData;
  const currentWeather = {
    state: location.label,
    country: location.country,
    dateString: getDate(current["time"]),
    temperature: `${current["temperature_2m"]}°`,
  };
  const weatherDetail = [
    {
      label: "Feels Like",
      value: `${current["apparent_temperature"]}°`,
    },
    {
      label: "Humidity",
      value: `${current["relative_humidity_2m"]} ${current_units["relative_humidity_2m"]}`,
    },
    {
      label: "Wind Speed",
      value: `${current["wind_speed_10m"]} ${current_units["wind_speed_10m"]}`,
    },
    {
      label: "Precipitation",
      value: `${current["precipitation"]} ${current_units["precipitation"]}`,
    },
  ];
  const dailyForcast = daily["time"].map((obj, index) => ({
    day: getDay(obj, "short"),
    minTemp: `${daily["temperature_2m_max"][index]}°`,
    maxTemp: `${daily["temperature_2m_min"][index]}°`,
  }));
  const hourlyForcast = (() => {
    const forcastObject = {};
    hourly["time"].forEach((obj, index) => {
      if (!forcastObject[getDay(obj)]) {
        forcastObject[getDay(obj)] = [
          {
            time: getTime(obj),
            temperature: `${hourly["temperature_2m"][index]}°`,
          },
        ];
      } else {
        forcastObject[getDay(obj)] = [
          ...forcastObject[getDay(obj)],
          {
            time: getTime(obj),
            temperature: `${hourly["temperature_2m"][index]}°`,
          },
        ];
      }
    });
    return forcastObject;
  })();
  return { currentWeather, weatherDetail, dailyForcast, hourlyForcast };
};
