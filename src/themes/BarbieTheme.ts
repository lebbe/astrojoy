import { extendTheme } from "@mui/joy/styles";

export const BarbieTheme = extendTheme({
  fontFamily: {
    display: "Pacifico, cursive",
    body: "Comic Sans MS, Noto Sans, sans-serif",
  },
  radius: {
    xs: "12px", // Small components will have a subtle roundness
    sm: "16px", // Slightly larger components, a bit more rounded
    md: "24px", // Medium components get an even rounder look
    lg: "32px", // Large components are very rounded
    xl: "40px", // Extra-large components are very playful and bubbly
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px", // Extra rounded buttons for a fun, playful vibe
          padding: "8px 16px",
          textTransform: "none", // Keep text lowercase for a softer feel
          border: "2px solid #ff69b4", // Custom outline for the button (same as the background)
          "&:hover": {
            backgroundColor: "#ff85c2", // Lighter pink on hover
            border: "2px solid #ff85c2", // Change the outline on hover
            color: "#800080", // Dark purple text color on hover
          },
          "&:focus": {
            outline: "3px solid #ffb3d9", // Soft pink outline when focused
          },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: "24px", // Cards get a rounded, bubbly look
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Adds a soft shadow for a light, playful effect
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: "16px", // Rounded inputs for a softer, more friendly appearance
        },
      },
    },
    JoyBox: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#ffe6f2",
          100: "#ffb3d9",
          200: "#ff80bf",
          300: "#ff4da6",
          400: "#ff1a8c",
          500: "#e60073",
          600: "#b30059",
          700: "#800040",
          800: "#4d0026",
          900: "#1a000d",
        },
        text: {
          primary: "#4d4d4d",
        },
        background: {
          body: "#fff0f5",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#4d0026",
          100: "#800040",
          200: "#b30059",
          300: "#e60073",
          400: "#ff1a8c",
          500: "#ff4da6",
          600: "#ff80bf",
          700: "#ffb3d9",
          800: "#ffe6f2",
          900: "#fff0f5",
        },
        background: {
          body: "#1a000d",
        },
      },
    },
  },
});
