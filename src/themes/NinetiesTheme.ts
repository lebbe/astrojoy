import { extendTheme } from "@mui/joy/styles"; // Adjust based on your setup

export const ninetiesTheme = extendTheme({
  fontFamily: {
    display: "Courier New, monospace", // A classic 90's-style monospaced font
    body: "Arial, sans-serif", // Widely used font in the 90s
  },
  radius: {
    xs: "0", // No rounding for a sharp, boxy feel
    sm: "0", // Slight rounding for smaller elements to maintain the square look
    md: "0", // Minimal rounding for medium-sized elements
    lg: "0", // Minimal rounding for larger containers or cards
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#f0f8ff",
          100: "#b0e0e6",
          200: "#7ec8e3",
          300: "#4682b4",
          400: "#3b6aa0",
          500: "#2f4f8f",
        },
        background: {
          body: "#e6e6fa", // Light lavender background
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#101b2e",
          100: "#172844",
          200: "#1f355d",
          300: "#274577",
          400: "#2f4f8f",
          500: "#3b6aa0",
        },
        background: {
          body: "#101b2e", // Darker background for contrast in dark mode
        },
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: "0", // Sharp edges for a 90s boxy feel
          padding: "10px 20px",
          fontSize: "14px",
          textTransform: "uppercase", // Bold blocky 90s-style text
          backgroundColor: "#4682b4", // Light blue as primary color
          "&:hover": {
            backgroundColor: "#3b6aa0", // Darker blue on hover
          },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: "0", // Keep cards boxy
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)", // Classic shadow for depth
          padding: "20px",
          backgroundColor: "#f0f8ff", // Very light blue background for cards
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: "0", // Minimal rounding for input fields
          padding: "10px",
          fontSize: "14px",
          backgroundColor: "#b0e0e6", // Light blue input fields
        },
      },
    },
  },
});
