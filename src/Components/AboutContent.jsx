import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import About from "../Assets/Images/about-2.jpg";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px",backgroundImage:"about-2.jpg" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={About}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px", }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              subtitle of website
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit ipsa amet soluta possimus aspernatur hic! Earum
              quasi pariatur repellendus harum.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quae rem temporibus ab delectus et ipsum facere accusantium
              doloribus exercitationem!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
