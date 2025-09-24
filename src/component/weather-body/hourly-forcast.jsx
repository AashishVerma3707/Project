import { Typography } from "@mui/material";
import {
  PrimaryContainer,
  Row,
  SecondaryContainer,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import CustomImage from "../../shared-component/image.component";
import partlyCloud from "../../assets/images/icon-partly-cloudy.webp";

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
      sx={{
        width: "20vw",
        maxHeight: "695px",
        maxWidth: "385px",
        padding: theme.customSpacing[250],
        borderRadius: theme.radius[20],
      }}
      rowGap={theme.customSpacing[200]}
    >
      <Row
        fullWidth
        justifyContent="space-between"
        sx={{ marginBlock: theme.spacing(3) }}
      >
        <Typography variant="h5">Hourly Forcast</Typography>
        <Typography variant="h5">DropDown</Typography>
      </Row>
      {hourlyWeatherData.map((obj) => (
        <SecondaryContainer
          darkerShade
          enableBorder
          sx={{ minHeight: "60px" }}
          fullWidth
          justifyContent="center"
        >
          <Row fullWidth fullHeight justifyContent="space-between">
            <Row
              fullHeight
              fullWidth
              columnGap={theme.customSpacing[100]}
              sx={{ flex: 1 }}
            >
              <CustomImage logo={partlyCloud} sx={{ width: 40 }} />
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
