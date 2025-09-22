import { Box } from "@mui/material";

const CustomImage = ({ logo }) => {
  return (
    <Box>
      <img src={logo} alt="Sunny" style={{ width: "100%", height: "100%" }} />
    </Box>
  );
};
export default CustomImage;
