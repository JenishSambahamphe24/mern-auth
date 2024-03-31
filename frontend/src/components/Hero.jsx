import React from "react";
import { Box, Container, Button, Card, Typography, Link } from "@mui/material";

function Hero() {
  return (
    <div>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ padding: "20px 30px", marginTop: "30px" }}>
          <Typography variant="h5" textAlign="center">
            <b>MERN Authentication</b>
          </Typography>
          <Box mt="20px">
            <Typography>
              This is a boilerplate for MERN Authentication that stores JWT in
              HTTP-obly cookie. It also make use of Redux Toolkit and Material
              UI library
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection={{ sm: "column", md: "row" }}
            >
              <Link href="/register" underline="none">
                <Button>Register</Button>
              </Link>
              <Link href="/login" underline="none">
                <Button>Log In</Button>
              </Link>
            </Box>
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default Hero;
