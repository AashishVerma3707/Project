import { Typography } from "@mui/material";
import {
  Column,
  PrimaryContainer,
  Row,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";

const WeatherDetail = () => {
  const IndividualWeatherDetailBox = ({ title, data }) => (
    <PrimaryContainer
      rowGap={theme.customSpacing[300]}
      alignItems="center"
      justifyContent="center"
      sx={{
        flex: 1,
        // padding: theme.customSpacing[250],
        maxWidth: "180px",
        minWidth: "120px",
      }}
      fullHeight
      enableBorder
    >
      <Column  sx={{height:'85%', width:'85%'}} justifyContent='space-between'>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h3">{data}</Typography>
      </Column>
    </PrimaryContainer>
  );

  return (
    <Row
      columnGap={theme.customSpacing[250]}
      sx={{
        width: "41vw",
        flex: 2,
        minHeight: "120px",
      }}
    >
      <IndividualWeatherDetailBox title="Feels Like" data={20} />
      <IndividualWeatherDetailBox title="Humidity" data="46%" />
      <IndividualWeatherDetailBox title="Wind" data="14 Km/h" />
      <IndividualWeatherDetailBox title="Precipitation" data="0 mm" />
    </Row>
  );
};

export default WeatherDetail;
