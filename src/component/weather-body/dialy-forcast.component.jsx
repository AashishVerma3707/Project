import { Typography } from "@mui/material";
import {
  Column,
  PrimaryContainer,
  Row,
} from "../../shared-component/shared-styled-component";
import theme from "../../theme";
import CustomImage from "../../shared-component/image.component";
import partlyCloud from "../../assets/images/icon-partly-cloudy.webp";

const DailyWeatherForcast = () => {
  const wholeWeekForcast = [
    {
      day: "Tue",
      maxTemp: "20°",
      minTemp: "14°",
    },
    {
      day: "Wed",
      maxTemp: "21°",
      minTemp: "15°",
    },
    {
      day: "Thu",
      maxTemp: "24°",
      minTemp: "14°",
    },
    {
      day: "Fri",
      maxTemp: "25°",
      minTemp: "13°",
    },
    {
      day: "Sat",
      maxTemp: "25°",
      minTemp: "15°",
    },
    {
      day: "Sun",
      maxTemp: "20°",
      minTemp: "16°",
    },
    {
      day: "Mon",
      maxTemp: "24°",
      minTemp: "15°",
    },
  ];

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
            <Typography variant="h6">{maxTemp}</Typography>
            <Typography variant="h7">{minTemp}</Typography>
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
        {wholeWeekForcast.map((obj) => {
          return <IndividualBox tempData={obj} />;
        })}
      </Row>
    </Column>
  );
};
export default DailyWeatherForcast;
