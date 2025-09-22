import { Button } from "@mui/material";
import AutocompleteField from "../input-components/autocomplete-field";
import theme from "../theme";
import { Row } from "./shared-styled-component";
import { getLocation } from "../api/services";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/debounce.hook";
import { isEmpty } from "lodash";
import zustandStore from "../store/store";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("aa");
  const [options, setOptions] = useState([]);
  const debouncedInputValue = useDebounce(inputValue);
  const setLocation = zustandStore((state) => state.setLocation);
  const param = {
    name: debouncedInputValue,
    count: 20,
    launguage: "en",
    format: "json",
  };
  const { data, isLoading } = useQuery({
    enabled: !isEmpty(inputValue),
    queryKey: ["search-location", param],
    queryFn: () => getLocation(param),
  });

  useEffect(() => {
    if (data?.results?.length > 0) {
      const fetchedLocation = data.results.map((obj) => ({
        inputValue: obj?.id,
        label: obj?.name,
        latitude: obj?.latitude,
        longitude: obj?.longitude,
        admin1: obj.admin1,
        country: obj.country,
      }));
      setOptions(fetchedLocation);
    }
  }, [data]);
  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };
  const onValueChange = (value) => {
    setLocation(value);
  };
  return (
    <Row
      columnGap={theme.customSpacing[200]}
      fullWidth
      sx={{ flex: 1, maxHeight: "fit-content" }}
    >
      <Row sx={{ flex: 4, justifyContent: "flex-end" }}>
        <AutocompleteField
          searchField
          onInputChange={handleInputChange}
          loading={isLoading}
          options={options}
          onValueChange={onValueChange}
          sx={{ maxWidth: "26vw" }}
        />
      </Row>
      <Row sx={{ flex: 2.4 }} fullHeight>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            height: "100%",
            maxHeight: theme.spacing[400],
            maxWidth: theme.customSpacing[1200],
            width: "20%",
          }}
        >
          Search
        </Button>
      </Row>
    </Row>
  );
};
export default SearchBox;
