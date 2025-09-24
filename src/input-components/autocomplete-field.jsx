import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";
import { ReactComponent as SearchLoadingIcon } from "../assets/images/icon-loading.svg";
import {
  Column,
  PrimaryContainer,
  Row,
  SecondaryContainer,
} from "../shared-component/shared-styled-component";
import theme from "../theme";

const { Autocomplete, InputBase, Box, Typography } = require("@mui/material");
const { useState, forwardRef } = require("react");

const AutocompleteField = ({
  searchField,
  onInputChange,
  options,
  loading,
  onValueChange,
  ...rest
}) => {
  const [value, setValue] = useState(null);

  const CustomPaper = forwardRef(function CustomPaper(props, ref) {
    return (
      <PrimaryContainer
        fullWidth
        ref={ref}
        {...props}
        alignItems="stretch"
        sx={{
          maxHeight: "250px",
          color: theme.palette.neutral[0],
          marginBlock: theme.spacing(10),
          "& .MuiAutocomplete-listbox": {
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
      >
        {props.children}
      </PrimaryContainer>
    );
  });
  const { sx, ...restProps } = rest;
  const CustomOption = ({ option }) => {
    return (
      <Row fullWidth sx={{ paddingBlock: theme.spacing(1) }}>
        <Column fullWidth rowGap={theme.spacing(2)}>
          {option.label}
          <Row fullWidth justifyContent="space-between">
            <Typography variant="h8" color="grey">
              {option.admin1}
            </Typography>{" "}
            <Typography variant="h8" color="grey">
              {option.country}
            </Typography>{" "}
          </Row>
        </Column>
      </Row>
    );
  };
  return (
    <Autocomplete
      {...restProps}
      sx={{
        width: "100%",
        ml: theme.customSpacing[150],
        flex: 1,
        color: theme.palette.neutral[0],
        "& input::placeholder": {
          ...theme.typography.body1,
          opacity: 1,
        },
        ...sx,
      }}
      loadingText={
        <Row fullWidth rowGap={theme.spacing(4)}>
          <SearchLoadingIcon />
          <Typography variant="body1" color="neutral[0]">
            Search in progress...
          </Typography>
        </Row>
      }
      noOptionsText={<Typography variant="body1">No locations</Typography>}
      loading={loading}
      renderInput={(params) => {
        return (
          <PrimaryContainer sx={{ paddingInline: "unset" }} fullWidth>
            <Box ref={params.InputProps.ref} sx={{ width: "100%" }}>
              <Row
                columnGap={theme.spacing(6)}
                sx={{ ml: theme.customSpacing[200] }}
                fullWidth
              >
                {searchField && <SearchIcon />}
                <InputBase
                  {...params.inputProps}
                  placeholder="Search for a place..."
                  inputProps={{
                    ...params.inputProps,
                    "aria-label": "search google maps",
                  }}
                  sx={{
                    width: "100%",
                    flex: 1,
                    color: theme.palette.neutral[0],
                    "& input::placeholder": {
                      ...theme.typography.body1,
                      opacity: 1,
                    },
                  }}
                />
              </Row>
            </Box>
          </PrimaryContainer>
        );
      }}
      slots={{
        paper: CustomPaper,
      }}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li
            key={key}
            {...optionProps}
            style={{
              background: selected ? "transparent" : "auto",
              paddingInline: selected ? "unset" : theme.spacing(4),
            }}
          >
            {selected ? (
              <SecondaryContainer sx={{ paddingBlock: theme.spacing(3) }} fullWidth>
                <CustomOption option={option} />
              </SecondaryContainer>
            ) : (
              <CustomOption option={option} />
            )}
          </li>
        );
      }}
      options={options}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        onValueChange(newValue);
      }}
      onInputChange={(_, newInputValue) => {
        onInputChange(newInputValue);
      }}
    />
  );
};
export default AutocompleteField;
