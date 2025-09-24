import { Box } from "@mui/material";

const CustomImage = ({ logo, sx }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <img
        src={logo}
        alt="Weather Icon"
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default CustomImage;
