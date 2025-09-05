import React from "react";
import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#032541", 
        color: "white",
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={3}
        >
        
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
           Data Clone
          </Typography>


          <Stack direction="row" spacing={3}>
            <Link href="#about" color="inherit" underline="hover">
              About
            </Link>
            <Link href="#privacy" color="inherit" underline="hover">
              Privacy
            </Link>
            <Link href="#contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

       
        <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} TMDB Clone. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
