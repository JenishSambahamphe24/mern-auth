import { createTheme } from "@mui/material";

const Theme = createTheme({
    typography: {
      fontFamily: [
        "Roboto Condensed",
        "Playfair Display",
        "sans-serif"
      ].join(','),
      h1: {
        fontFamily: 'Playfair Display',
      },
      h2: {
        fontFamily: 'Playfair Display',
      },
      h3: {
        fontFamily: 'Playfair Display',
      },
      h4: {
        fontFamily: 'Playfair Display',
      },
      h5: {
        fontFamily: 'Playfair Display',
      },
      h6: {
        fontFamily: 'Playfair Display',
      },
      body1:{
        fontFamily:'sans-serif'
      },
      body2:{
        fontFamily:'sans-serif'
      },
      caption:{
        fontFamily:'Roboto Condensed'
      },
      subtitle1:{
        fontFamily:'Roboto Condensed'
      }
    },
  });

  export default Theme