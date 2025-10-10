export const unitOption = (imperial) => ({
  categoryHeader: `Switch to ${imperial ? "Imperial" : "Metric"}`,
  selectOptions: [
    {
      category: {
        label: "Temperature",
        value: "temperature",
      },
      options: [
        {
          label: "Celsius (°C)",
          value: "celsius",
        },
        {
          label: "Fahrenheit (°F)",
          value: "fahrenheit",
        },
      ],
    },
    {
      category: {
        label: "Temperature",
        value: "temperature",
      },
      options: [
        {
          label: "Celsius (°C)",
          value: "celsius",
        },
        {
          label: "Fahrenheit (°F)",
          value: "fahrenheit",
        },
      ],
    },
    {
      category: {
        label: "Precipitation",
        value: "precipitation",
      },
      options: [
        {
          label: "Millimeters (mm)",
          value: "mm",
        },
        {
          label: "Inches (in)",
          value: "inch",
        },
      ],
    },
  ],
});
