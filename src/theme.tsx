import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    light: PaletteColor;
    dark: PaletteColor;
  }

  interface PaletteOptions {
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }
}

// Function to create a theme based on the mode
const getTheme = (mode: any) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#2196f3", // Example blue for primary color
        light: "#6ec6ff",
        dark: "#1a1a1a",
        contrastText: "#ffffff", // White text on primary color
      },
      secondary: {
        main: "#C0C0C0", // Example main for secondary color
        light: "#ffc947",
        dark: "#c66900",
        contrastText: "#ffffff", // White text on secondary color
      },

      light:
        mode === "dark"
          ? {
              main: "#fff", // white color
              light: "#e57373",
              dark: "#d32f2f",
            }
          : {
              main: "#000", // black color for light mode
              light: "#e57373",
              dark: "#d32f2f",
            },
      dark:
        mode === "dark"
          ? {
              main: "#000", // black color for light mode
              light: "#e57373",
              dark: "#d32f2f",
            }
          : {
              main: "#fff", // white color for dark mode
              light: "#e57373",
              dark: "#d32f2f",
            },
      error: {
        main: "#f44336", // Red for error
        light: "#e57373",
        dark: "#d32f2f",
      },
      warning: {
        main: "#ff9800", // Orange for warning
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#2196f3", // Informational messages use a blue
        light: "#64b5f6",
        dark: "#1976d2",
      },
      success: {
        main: "#4caf50", // Green for success
        light: "#81c784",
        dark: "#388e3c",
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 2,
        },
        styleOverrides: {
          root: {
            padding: "4px",
            backgroundColor: "#ffcdaa", // Light grey background
            "&.table-paper": {
              boxShadow: "none",
              borderRadius: 0,
            },
          },
          rounded: {
            borderRadius: "20px",
          },
          outlined: {
            borderColor: "#bdbdbd", // Light grey border
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            border: "1px solid #444",
            borderRadius: "4px",
            background: "linear-gradient(45deg, #434343 0%, #000 100%)",
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            color: "#fff",
            border: "none",
            "&.Mui-selected": {
              backgroundColor: "#555",
              color: "#fff",
            },
            "&:hover": {
              backgroundColor: "#444",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: "#000000",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(90deg, #000000 0%, #333333 100%)",
            },
            "&.Mui-disabled": {
              color: "#666",
              background: "#333333",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "#2a2a2a",
            padding: "24px",
            borderRadius: "16px",
            height: "100%",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#e0f7fa",
          },
        },
      },
    },
  });

export default getTheme;
