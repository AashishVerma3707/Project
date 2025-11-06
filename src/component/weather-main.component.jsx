import { Column } from "../shared-component/shared-styled-component";
import theme from "../theme";
import WeatherBody from "./weather-body/weather-body-main.component";
import WeatherHeader from "./weather-header/weather-header.component";

const WeatherMain = () => {
  return (
    <Column fullWidth alignItems="center" rowGap={theme.customSpacing[500]}>
      
      <WeatherHeader />
      <WeatherBody />
    </Column>
  );
};

export default WeatherMain;
