import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//mui
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <Box
      className="container"
      sx={{
        paddingY: "3rem",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="a"
          sx={{ mr: "1rem", color: "black" }}
          href="https://twitter.com/AbdullahGumi_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </Box>
        <Box
          component="a"
          sx={{ mr: "1rem", color: "black" }}
          href="https://github.com/abdullahgumi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Box>
        <Box
          component="a"
          sx={{ mr: "1rem", color: "black" }}
          href="https://www.linkedin.com/in/abdullah-gumi-b0b4b4115/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </Box>
      </Box>
    </Box>
  );
}
