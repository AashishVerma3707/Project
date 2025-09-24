import { Box, styled } from "@mui/material";

export const Column = styled(Box)(
  ({
    rowGap,
    theme,
    alignItems = "flex-start",
    justifyContent = "flex-start",
    width,
    fullWidth = false,
    fullHeight = false,
  }) => `
    display: flex;
    flex-direction: column;
    row-gap: ${rowGap ?? theme.customSpacing?.[50] ?? theme.spacing(2)};
    width: ${width ?? (fullWidth ? "100%" : "fit-content")};
    height: ${fullHeight ? "100%" : "fit-content"};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    box-sizing: border-box;
  `
);

export const Row = styled(Box)(
  ({
    columnGap,
    rowGap,
    theme,
    alignItems = "center",
    justifyContent = "flex-start",
    width,
    fullWidth = false,
    fullHeight = false,
    flexWrap = "wrap",
  }) => `
    display: flex;
    flex-direction: row;
    column-gap: ${columnGap ?? theme.customSpacing?.[50] ?? theme.spacing(2)};
    row-gap: ${rowGap ?? theme.customSpacing?.[50] ?? theme.spacing(2)};
    width: ${width ?? (fullWidth ? "100%" : "fit-content")};
    height: ${fullHeight ? "100%" : "fit-content"};
    flex-wrap: ${flexWrap};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    box-sizing: border-box;
    flex-wrap:wrap;
  `
);

export const AppPage = styled(Column)(
  ({ theme }) => `
    width: 100vw;
    min-width:'fit-content';
    height: 100vh;
    min-height:fit-content;
    overflow:scroll;
    padding: ${theme.customSpacing?.[400] ?? theme.spacing(5)};
    background-color: ${theme.palette.primary.main};
    box-sizing: border-box;
    padding-inline: ${theme.customSpacing[1400]};
    scrollBar-width:none;
  `
);

export const PrimaryContainer = styled(Column)(
  ({ height = "fit-content", theme, padding, enableBorder }) => `
    border-radius: ${theme.radius?.[12] ?? theme.shape.borderRadius};
    padding: ${padding ?? theme.customSpacing?.[100]};
    background-color: ${
      theme.palette.neutral?.[800] ?? theme.palette.background.paper
    };
    border: ${
      enableBorder
        ? `1px solid ${theme.palette.neutral?.[600] ?? theme.palette.divider}`
        : `none`
    };
    box-sizing: border-box;
  `
);

export const SecondaryContainer = styled(PrimaryContainer)(
  ({ theme, enableBorder, darkerShade }) => `
    background-color: ${
      darkerShade
        ? theme.palette.neutral?.[700]
        : theme.palette.neutral?.[600] ?? theme.palette.background.default
    };
    border: ${
      enableBorder || darkerShade
        ? `1px solid ${theme.palette.neutral?.[600] ?? theme.palette.divider}`
        : `none`
    };
  `
);
