import { Typography } from "@mui/material";
import {
  Column,
  PrimaryContainer,
  Row,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import CustomImage from "../../shared-component/image.component";
import partlyCloud from "../../assets/images/icon-partly-cloudy.webp";

const DailyWeatherForcast = ({ weatherData }) => {
  const IndividualBox = ({ tempData }) => {
    const { day = "", maxTemp = "", minTemp = "" } = tempData;
    return (
      <PrimaryContainer
        rowGap={theme.spacing(7)}
        sx={{
          flex: 1,
          padding: theme.spacing(6),
          minWidth: "95px",
          maxHeight: "165px",
          maxWidth: "105px",
          borderRadius: theme.radius[12],
        }}
        fullHeight
        enableBorder
      >
        <Column
          fullWidth
          fullHeight
          alignItems="center"
          justifyContent="stretch"
        >
          <Typography variant="h6">{day}</Typography>
          <CustomImage logo={partlyCloud} />
          <Row fullWidth justifyContent="space-between">
            <Typography variant="h8">{maxTemp}</Typography>
            <Typography variant="h8">{minTemp}</Typography>
          </Row>
        </Column>
      </PrimaryContainer>
    );
  };

  return (
    <Column rowGap={theme.customSpacing[250]}>
      <Typography variant="h5">Daily forecast</Typography>
      <Row
        columnGap={theme.customSpacing[200]}
        sx={{ width: "41vw", flex: 2, minHeight: "165px" }}
        justifyContent="stretch"
        rowGap={theme.spacing(7)}
      >
        {weatherData.map((obj) => {
          return <IndividualBox tempData={obj} />;
        })}
      </Row>
    </Column>
  );
};
export default DailyWeatherForcast;
