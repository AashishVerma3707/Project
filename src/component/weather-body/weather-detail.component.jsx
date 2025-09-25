import { Typography } from "@mui/material";
import {
  Column,
  PrimaryContainer,
  Row,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";

const WeatherDetail = ({ weatherData }) => {
  const IndividualWeatherDetailBox = ({ title, data }) => (
    <PrimaryContainer
      rowGap={theme.customSpacing[300]}
      alignItems="center"
      justifyContent="center"
      sx={{
        flex: 1,
        minWidth: "165px",
        maxWidth: "185px",
        borderRadius: theme.radius[12],
        height: "120px",
      }}
      fullHeight
      enableBorder
    >
      <Column
        sx={{ height: "85%", width: "85%" }}
        justifyContent="space-between"
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h3">{data}</Typography>
      </Column>
    </PrimaryContainer>
  );

  return (
    <Row
      columnGap={theme.customSpacing[250]}
      justifyContent="stretch"
      rowGap={theme.customSpacing[300]}
      sx={{
        width: "41vw",
        flex: 2,
      }}
    >
      {weatherData.map((obj) => (
        <IndividualWeatherDetailBox title={obj.label} data={obj.value} />
      ))}
    </Row>
  );
};

export default WeatherDetail;
