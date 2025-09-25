import {
  Column,
  PrimaryContainer,
  Row,
} from "../../shared-component/shared-styled-component";
import sunLogo from "../../assets/images/icon-sunny.webp";
import currentTempBgImage from "../../assets/images/bg-today-large.svg";

import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const CurrentTempComponent = ({ weatherData }) => {
  if (!weatherData) return;
  return (
    <PrimaryContainer
      sx={{
        backgroundImage: `url(${currentTempBgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "41vw",
        minHeight: "280px",
        flex: 5,
        borderRadius: theme.radius[20],
        maxHeight: "286px",
        minWidth: "345px",
      }}
      justifyContent="center"
      padding={theme.customSpacing[300]}
    >
      <Row justifyContent={"space-between"} fullWidth>
        <Column>
          <Typography variant="h4">
            {weatherData.state}, {weatherData.country}
          </Typography>
          <Typography variant="h6">{weatherData.dateString}</Typography>
        </Column>
        <Row columnGap={theme.spacing(10)}>
          <Box sx={{ width: "120px", height: "120px" }}>
            <img
              src={sunLogo}
              alt="Sunny"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant="h1">{weatherData.temperature}</Typography>
        </Row>
      </Row>
    </PrimaryContainer>
  );
};

export default CurrentTempComponent;
