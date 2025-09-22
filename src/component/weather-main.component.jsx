import { AppPage } from "../shared-component/shared-styled-component";
import theme from "../theme";
import WeatherBody from "./weather-body/weather-body-main.component";
import WeatherHeader from "./weather-header/weather-header.component";

const WeatherMain = () => {
  return (
    <AppPage alignItems="center" rowGap={theme.customSpacing[500]}>
      <WeatherHeader />
      <WeatherBody />
    </AppPage>
  );
};

export default WeatherMain;
