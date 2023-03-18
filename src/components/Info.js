import { useState, useEffect } from "react";
import styled from "styled-components";
import SmoothList from "react-smooth-list";
import { useInView } from "react-hook-inview";

// Material UI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Wrapper = styled(SmoothList)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Paragraph = styled.p`
  transition: all 1s ease-in-out;
  opacity: ${({ view }) => (view ? 1 : 0)};
  transition-delay: ${({ delay }) => delay};
  transform: ${({ view }) =>
    view ? "translateY(0) rotateZ(0)" : "translateY(20px) rotateZ(3deg)"};
  font-size: 18px;
  width: 80%;
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    width: 100%;
  }
`;

export default function Info() {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);

  const [ref1, isRef1Visible] = useInView({ threshold: 0.5 });
  const [ref2, isRef2Visible] = useInView({ threshold: 0.5 });
  const [ref3, isRef3Visible] = useInView({ threshold: 0.5 });
  const [ref4, isRef4Visible] = useInView({ threshold: 0.5 });

  // Trigger setView on viewport enter
  useEffect(() => {
    isRef1Visible && setView1(true);
    isRef2Visible && setView2(true);
    isRef3Visible && setView3(true);
    isRef4Visible && setView4(true);
  }, [isRef1Visible, isRef2Visible, isRef3Visible, isRef4Visible]);

  return (
    <section id="info">
      <Box className="container">
        <Wrapper transitionDuration={1000}>
          <Grid container>
            <Grid
              item
              order={{ md: 1, xs: 2 }}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                color: "#64649B",
              }}
            >
              <Paragraph ref={ref1} delay=".8s" view={view1}>
                My work ethic is centered around delivering valuable work and continuously expanding my expertise.
              </Paragraph>
              <Paragraph ref={ref2} delay=".8s" view={view2}>
                As a skilled React developer, I possess knowledge and experience in both front-end and backend development. I am well-versed in React, Node, HTML, CSS, JavaScript, and Typescript, and committed to delivering high-quality code that enhances the value of your product.
              </Paragraph>
              <Paragraph ref={ref3} delay=".8s" view={view3}>
                Look no further if you're seeking a developer who can elevate your product to new heights.
              </Paragraph>
            </Grid>
            <Grid item order={{ md: 2, xs: 1 }} md={6} ref={ref4}>
              <lottie-player
                style={{
                  transition: "all .8s ease-in-out",
                  opacity: view4 ? 1 : 0,
                  transitionDelay: ".2s",
                  transform: view4 ? "scale(1)" : "scale(0)",
                }}
                src="https://assets8.lottiefiles.com/packages/lf20_7frdqxon.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </Grid>
          </Grid>
        </Wrapper>
      </Box>
    </section>
  );
}
