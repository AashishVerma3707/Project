import {
  Column,
  PrimaryContainer,
  Row,
} from "../../shared-component/shared-styled-component";
import sunLogo from "../../assets/images/icon-sunny.webp";
import currentTempBgImage from "../../assets/images/bg-today-large.svg";

import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const CurrentTempComponent = () => {
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
      }}
      justifyContent="center"
      padding={theme.customSpacing[300]}
    >
      <Row justifyContent={"space-between"} fullWidth>
        <Column>
          <Typography variant="h4">{"Sample Location"}</Typography>
          <Typography variant="h6">{"Sample Day, Sample Date"}</Typography>
        </Column>
        <Row columnGap={theme.spacing(10)}>
          <Box sx={{ width: "120px", height: "120px" }}>
            <img
              src={sunLogo}
              alt="Sunny"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant="h1">25&deg;</Typography>
        </Row>
      </Row>
    </PrimaryContainer>
  );
};

export default CurrentTempComponent;
