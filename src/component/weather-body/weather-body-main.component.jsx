import SearchBox from "../../shared-component/search-component";
import {
  Column,
  Row,
  SecondaryContainer,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import CurrentTempComponent from "./current-temp.component";
import DailyWeatherForcast from "./dialy-forcast.component";
import HourlyWeatherForcast from "./hourly-forcast";
import WeatherDetail from "./weather-detail.component";

const WeatherBody = () => {
  return (
    <Column
      alignItems="center"
      fullWidth
      rowGap={theme.customSpacing[400]}
      sx={{ flex: 6 }}
    >
      <SearchBox />

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
          <CurrentTempComponent />
          <WeatherDetail />
          <DailyWeatherForcast />
        </Column>
        <Row sx={{ flex: 2.4 }} fullHeight alignItems="flex-start">
          <HourlyWeatherForcast />
        </Row>
      </Row>
    </Column>
  );
};

export default WeatherBody;
