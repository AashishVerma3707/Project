import { Typography } from "@mui/material";
import {
  Column,
  PrimaryContainer,
  Row,
  SecondaryContainer,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import CustomImage from "../../shared-component/image.component";
import partlyCloud from "../../assets/images/icon-partly-cloudy.webp";

const HourlyWeatherForcast = ({ weatherData }) => {
  return (
    <PrimaryContainer
      sx={{
        width: "20vw",
        maxHeight: "695px",
        maxWidth: "385px",
        minWidth: "343px",
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
      <Column
        fullWidth
        sx={{ maxHeight: "90%", overflow: "auto", scrollbarWidth:'none' }}
        rowGap={theme.customSpacing[200]}
      >
        {weatherData["Thursday"].map((obj) => (
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
                <Typography variant="h5">{obj?.time}</Typography>
              </Row>
              <Typography variant="h5">{obj?.temperature}</Typography>
            </Row>
          </SecondaryContainer>
        ))}
      </Column>
    </PrimaryContainer>
  );
};

export default HourlyWeatherForcast;
