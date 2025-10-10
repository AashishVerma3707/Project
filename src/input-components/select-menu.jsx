import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { ReactComponent as ExpandMore } from "../assets/images/icon-dropdown.svg";
import { PrimaryContainer } from "../shared-component/shared-styled-component";
import theme from "../theme";
import { ListSubheader } from "@mui/material";

const PositionedMenu = ({
  menuOption,
  buttonLabel,
  handleSelect,
  categorizedOpt = false,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const CustomPaper = React.forwardRef(function CustomPaper(props, ref) {
    return (
      <PrimaryContainer
        ref={ref}
        sx={{
          maxHeight: "320px",
          overflow: "auto",
          color: theme.palette.neutral[0],
          marginBlock: theme.spacing(10),
        }}
        {...props}
      >
        {props.children}
      </PrimaryContainer>
    );
  });

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMore />}
        variant="contained"
        sx={{ background: theme.palette.neutral[600] }}
      >
        {buttonLabel || "Select"}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        slots={{
          paper: CustomPaper,
        }}
      >
        {!categorizedOpt && Array.isArray(menuOption) ? (
          <>
            {[...menuOption]?.map((opt) => (
              <MenuItem onClick={() => handleSelect(opt)}>
                {opt.label ?? opt}
              </MenuItem>
            ))}
          </>
        ) : categorizedOpt && menuOption?.selectOptions ? (
          <>
            <ListSubheader disableSticky>
              {menuOption?.categoryHeader || "Select an Option"}
            </ListSubheader>
            {menuOption?.selectOptions.map((opt) => (
              <>
                <ListSubheader>{opt.categoryLabel}</ListSubheader>
                {opt?.options.map((opt) => (
                  <MenuItem onClick={() => handleSelect(opt)}>
                    {opt.label ?? opt}
                  </MenuItem>
                ))}
              </>
            ))}
          </>
        ) : null}
      </Menu>
    </div>
  );
};
export default PositionedMenu;
