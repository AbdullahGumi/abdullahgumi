import React, { useState, useEffect } from "react";
import styled from "styled-components";

//components
import Skill from "./Skill";

// Material UI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-hook-inview";

const TextWithAnimation = styled(Typography)`
  transition: all 1s ease-in-out;
  opacity: ${({ view }) => (view ? 1 : 0)};
  transition-delay: ${({ delay }) => delay};
  transform: ${({ view }) =>
    view ? "translateY(0) rotateZ(0)" : "translateY(20px) rotateZ(3deg)"};
`;

export default function Skills() {
  const [view, setView] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);

  const [ref, isVisible] = useInView({ threshold: 0.5 });
  const [ref1, isRef1Visible] = useInView({ threshold: 0.5 });
  const [ref2, isRef2Visible] = useInView({ threshold: 0.5 });

  // Trigger setView on viewport enter
  useEffect(() => {
    isVisible && setView(true);
    isRef1Visible && setView1(true);
    isRef2Visible && setView2(true);
  }, [isVisible, isRef1Visible, isRef2Visible]);

  const skills = [
    {
      color: "#2e7ad1",
      text: "React Native",
      dimension: { md: 150, xs: 104 },
      top: { md: "98px", xs: "351px" },
      left: { md: "52px", xs: "20px" },
      delay: "1s",
    },
    {
      color: "#31cec9",
      text: "Nextjs",
      dimension: { md: 124, xs: 95 },
      top: { md: "20px", xs: "326px" },
      left: { md: "251px", xs: "140px" },
      delay: "2s",
    },
    {
      color: "#2e7ad1",
      text: "React",
      dimension: { md: 150, xs: 97 },
      top: { md: "0px", xs: "322px" },
      left: { md: "435px", xs: "255px" },
      delay: "1.3s",
    },
    {
      color: "#31cec9",
      text: "HTML",
      dimension: { md: 65, xs: 65 },
      top: { md: "317px", xs: "480px" },
      left: { md: "42px", xs: "44px" },
      delay: "1s",
    },
    {
      color: "#31cec9",
      text: "CSS",
      dimension: { md: 88, xs: 69 },
      top: { md: "290px", xs: "500px" },
      left: { md: "207px", xs: "140px" },
      delay: "0.8s",
    },
    {
      color: "#31cec9",
      text: "JavaScript",
      dimension: { md: 88, xs: 88 },
      top: { md: "180px", xs: "436px" },
      left: { md: "331px", xs: "244px" },
      delay: "2s",
    },
    {
      color: "#31cec9",
      text: "TypeScript",
      dimension: { md: 132, xs: 110 },
      top: { md: "224px", xs: "545px" },
      left: { md: "487px", xs: "240px" },
      delay: "1s",
    },
    {
      color: "#2e7ad1",
      text: "Express",
      dimension: { md: 63, xs: 63 },
      top: { md: "437px", xs: "589px" },
      left: { md: "0px", xs: "20px" },
      delay: "2s",
    },
    {
      color: "#31cec9",
      text: "Cypress",
      dimension: { md: 80, xs: 80 },
      top: { md: "420px", xs: "608px" },
      left: { md: "136px", xs: "111px" },
      delay: "2s",
    },
    {
      color: "#2e7ad1",
      text: "Tailwind",
      dimension: { md: 88, xs: 88 },
      top: { md: "312px", xs: "664px" },
      left: { md: "364px", xs: "207px" },
      delay: "2s",
    },
    {
      color: "#31cec9",
      text: "Redux",
      dimension: { md: 126, xs: 96 },
      top: { md: "451px", xs: "745px" },
      left: { md: "289px", xs: "111px" },
      delay: "2s",
    },
  ];

  return (
    <section ref={ref}>
      <Box className="container">
        <Grid container sx={{ minHeight: "100vh" }}>
          <Grid item order={{ md: 1, xs: 2 }} xs={12} md={7}>
            <Box
              sx={{
                position: "relative",
                width: "fit-content",
                height: { md: "", xs: "1000px" },
              }}
            >
              {skills.map(({ color, text, dimension, top, left, delay }) => (
                <Skill
                  key={text}
                  name={text}
                  color={color}
                  text={text}
                  dimension={dimension}
                  top={top}
                  left={left}
                  delay={delay}
                  view={view}
                />
              ))}
            </Box>
          </Grid>
          <Grid
            item
            order={{ md: 2, xs: 1 }}
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItmes: "center",
              flexDirection: "column",
            }}
          >
            <TextWithAnimation
              ref={ref1}
              delay=".2s"
              view={view1}
              sx={{
                fontSize: { xs: 24, md: 32 },
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Technologies I have worked with
            </TextWithAnimation>
            <TextWithAnimation
              ref={ref2}
              delay=".2s"
              view={view2}
              sx={{ fontSize: { xs: 16, md: 18 }, color: "#64649B" }}
            >
              I have worked with both Front-end and Back-end technologies and
              I'm still willing to learn more things!
            </TextWithAnimation>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
