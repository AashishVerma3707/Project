import { Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Column, Row } from "../../shared-component/shared-styled-component";
import theme from "../../theme";

const WeatherHeader = () => {
  return (
    <Column alignItems="center" rowGap={theme.customSpacing[800]} fullWidth sx={{flex:2}}>
      <Row fullWidth justifyContent="space-between">
        <Logo />
        <Row justifyContent="space-between">Weather Now</Row>
      </Row>
      <Row justifyContent="center" width="60vw">
        <Typography variant="h2">How’s the sky looking today?</Typography>
      </Row>
    </Column>
  );
};

export default WeatherHeader;
