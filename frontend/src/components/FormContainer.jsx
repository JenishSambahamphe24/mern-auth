import { Paper } from "@mui/material";
import React from "react";

const FormContainer = ({children}) => {
  return (
    <div>
      <Paper elevation={2} sx={{width:{xs:'90%', md:'60%'}, margin:"auto auto"}}>
        <Box>
            {children}
        </Box>
      </Paper>
    </div>
  );
};

export default FormContainer;
