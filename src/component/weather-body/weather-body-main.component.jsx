import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { getWeather } from "../../api/services";
import SearchBox from "../../shared-component/search-component";
import { Column, Row } from "../../shared-component/shared-styled-component";
import zustandStore from "../../store/store";
import theme from "../../theme";
import CurrentTempComponent from "./current-temp.component";
import DailyWeatherForcast from "./dialy-forcast.component";
import HourlyWeatherForcast from "./hourly-forcast";
import WeatherDetail from "./weather-detail.component";
import { transformWeatherData } from "../../utils/weather.utils";

const WeatherBody = () => {
  const location = zustandStore((state) => state.location);

  const weatherDetailParams = {
    latitude: location?.latitude,
    longitude: location?.longitude,
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m",
    daily: "temperature_2m_max,temperature_2m_min",
    hourly: "temperature_2m",
    timezone: "auto",
  };
  const { data: weatherData } = useQuery({
    enabled: !isEmpty(location),
    queryKey: ["get-weather", weatherDetailParams],
    queryFn: () => getWeather(weatherDetailParams),
    select: (data) => {
      return transformWeatherData({ weatherData: data, location });
    },
  });

  return (
    <Column
      alignItems="center"
      fullWidth
      rowGap={theme.customSpacing[400]}
      sx={{ flex: 6 }}
    >
      <SearchBox />
      {weatherData ? (
        <Row
          columnGap={theme.customSpacing[200]}
          fullWidth
          sx={{ flex: 4 }}
          justifyContent="center"
        >
          <Column
            fullHeight
            sx={{ flex: 4, maxHeight: "690px" }}
            alignItems="flex-end"
            rowGap={theme.spacing(16)}
          >
            <CurrentTempComponent weatherData={weatherData?.currentWeather} />
            <WeatherDetail weatherData={weatherData?.weatherDetail} />
            <DailyWeatherForcast weatherData={weatherData?.dailyForcast} />
          </Column>
          <Row sx={{ flex: 2.4 }} fullHeight alignItems="flex-start">
            <HourlyWeatherForcast weatherData={weatherData?.hourlyForcast} />
          </Row>
        </Row>
      ) : (
        <>Select Location</>
      )}
    </Column>
  );
};

export default WeatherBody;
