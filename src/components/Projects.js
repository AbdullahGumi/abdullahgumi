import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Material UI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-hook-inview";
import Project from "./Project";

const TextWithAnimation = styled(Typography)`
  transition: all 1s ease-in-out;
  opacity: ${({ view }) => (view ? 1 : 0)};
  transition-delay: ${({ delay }) => delay};
  transform: ${({ view }) =>
    view ? "translateY(0) rotateZ(0)" : "translateY(20px) rotateZ(3deg)"};
`;

export default function Skills() {
  const [view, setView] = useState(false);

  const [textRef, isTextVisible] = useInView({ threshold: 0 });

  // Trigger setView on viewport enter
  useEffect(() => {
    isTextVisible && setView(true);
  }, [isTextVisible]);

  const Projects = [
    {
      name: "NextTube",
      desc: "Fullstack youtube clone built with nextjs",
      tech: "Nextjs, TypeScript, tailwindcss, mongoDB",
      link: "https://next-tube-abdullahgumi.vercel.app/",
    },
    {
      name: "Aperture",
      desc: "DeFi app landing page",
      tech: "React, material UI, Styled-components",
      link: "https://aperture-ecru.vercel.app/",
    },
    {
      name: "Fitness",
      desc: "React fitness website",
      tech: "React, material UI, Styled-components, google-maps",
      link: "https://material-fitness.vercel.app",
    },
    {
      name: "Profiles",
      desc: "Mobile only React app made with tailwind",
      tech: "React, redux-toolkit, react-router-dom, tailwindcss, localStorage",
      link: "https://profile-screens.vercel.app/profiles/?tab=user",
    },
    {
      name: "Smart Box",
      desc: "React app that uses AI to detect faces and apparels in an image",
      tech: "React, Redux, Redux-thunk, clarifai",
      link: "https://abdullahgumi.github.io/smart-box/",
    },

    {
      name: "Covid Tracker",
      desc: "Interactive map and charts that displays covid stats",
      tech: "React, Chart.js, react-simple-maps, material UI, Styled-components",
      link: "https://covid-tracker-gilt-seven.vercel.app/",
    },
  ];

  return (
    <Box className="container">
      <TextWithAnimation
        ref={textRef}
        delay=".2s"
        view={view}
        sx={{
          fontSize: { xs: 24, md: 32 },
          fontWeight: 700,
          textAlign: "center",
          mb: "2rem",
        }}
      >
        Projects
      </TextWithAnimation>
      <Grid
        container
        columnSpacing={4}
        sx={{
          minHeight: "100vh",
        }}
      >
        {Projects.map((item, i) => (
          <Grid item md={6} xs={12}>
            <Project item={item} i={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
