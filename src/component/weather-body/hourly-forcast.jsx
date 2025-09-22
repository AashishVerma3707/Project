import { Typography } from "@mui/material";
import {
  PrimaryContainer,
  Row,
  SecondaryContainer,
} from "../../shared-component/shared-styled-component";
import CustomImage from "../../shared-component/image.component";
import partlyCloud from "../../assets/images/icon-partly-cloudy.webp";
import theme from "../../theme";

const HourlyWeatherForcast = () => {
  const hourlyWeatherData = [
    {
      time: "3 pm",
      temp: "20°",
    },
    {
      time: "4 pm",
      temp: "20°",
    },
    {
      time: "5 pm",
      temp: "20°",
    },
    {
      time: "6 pm",
      temp: "20°",
    },
    {
      time: "7 pm",
      temp: "20°",
    },
    {
      time: "8 pm",
      temp: "20°",
    },
    {
      time: "9 pm",
      temp: "20°",
    },
    {
      time: "10 pm",
      temp: "20°",
    },
  ];
  return (
    <PrimaryContainer
      sx={{ width: "20vw", maxHeight: "695px" }}
      rowGap={theme.customSpacing[200]}
    >
      <Row fullWidth>
        <Typography variant="h5">Hourly Forcast</Typography>
        <Typography variant="h5">DropDown</Typography>
      </Row>
      {hourlyWeatherData.map((obj) => (
        <SecondaryContainer
          darkerShade
          enableBorder
          sx={{ minHeight: "60px" }}
          fullWidth
          justifyContent='center'
        >
          <Row fullWidth fullHeight justifyContent="space-between">
            <Row columnGap={theme.customSpacing[100]}>
              {/* <CustomImage logo={partlyCloud} /> */}
              <Typography variant="h5">{obj.time}</Typography>
            </Row>
            <Typography variant="h5">{obj.temp}</Typography>
          </Row>
        </SecondaryContainer>
      ))}
    </PrimaryContainer>
  );
};

export default HourlyWeatherForcast;
