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
      tech: "Nextjs, TypeScript, Tailwindcss, MongoDB",
      link: "https://next-tube-abdullahgumi.vercel.app/",
    },
    {
      name: "Trello 2.0",
      desc: "Trello clone with react-dnd",
      tech: "React, react-dnd redux, Tailwindcss",
      link: "https://trello-theta.vercel.app/",
    },
    {
      name: "Medium 2.0",
      desc: "Nextjs Medium clone with ISR",
      tech: "Typescript, Sanity CMS, Tailwindcss, Nextjs, React",
      link: "https://medium2-0-rose.vercel.app/",
    },
    {
      name: "Smart Box",
      desc: "React app that uses AI to detect faces and apparels in an image",
      tech: "React, Redux, Redux-thunk, Material UI, Clarifai",
      link: "https://abdullahgumi.github.io/smart-box/",
    },
    {
      name: "Covid Tracker",
      desc: "Interactive map and charts that displays covid stats",
      tech: "React, Chart.js, react-simple-maps, Material UI, Styled-components",
      link: "https://covid-tracker-gilt-seven.vercel.app/",
    },
    {
      name: "Aperture",
      desc: "DeFi app landing page",
      tech: "React, Material UI, Styled-components",
      link: "https://aperture-ecru.vercel.app/",
    },
    {
      name: "Fitness",
      desc: "React fitness website",
      tech: "React, Material UI, Styled-components, Google-maps",
      link: "https://material-fitness.vercel.app",
    },
    {
      name: "Profiles",
      desc: "Mobile only React app made with tailwind",
      tech: "React, redux-toolkit, react-router-dom, Tailwindcss, LocalStorage",
      link: "https://profile-screens.vercel.app/profiles/?tab=user",
    },
    // react native
    {
      name: "Video Player",
      desc: "Local videos player with react native",
      tech: "react-native, simple-thumbnail, react-native-video, ffmpeg",
      link: "https://github.com/AbdullahGumi/Player_RN",
    },
    {
      name: "Uber2.0",
      desc: "Uber clone with expo",
      tech: "react-native, react-native-maps, expo, expo-location",
      link: "https://github.com/AbdullahGumi/Uber2.0",
    },
    {
      name: "Tinder2.0",
      desc: "Tinder clone with expo",
      tech: "react-native, firebase, tailwind, react-native-deck-swiper",
      link: "https://github.com/AbdullahGumi/Tinder2.0",
    },
    {
      name: "Deliveroo2.0",
      desc: "Deliveroo food delivery service with expo",
      tech: "react-native, redux, tailwind, Sanity CMS",
      link: "https://github.com/AbdullahGumi/Deliveroo2.0",
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
