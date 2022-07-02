import { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

//mui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
    transition: all 330ms ease-in-out;
    transform: ${({ animatePercent }) => {
      if (animatePercent < 50) {
        return "translateY(20px) rotateZ(20deg)";
      } else if (animatePercent < 120) {
        return "translateY(20px) rotateZ(15deg)";
      } else if (animatePercent < 200 && animatePercent > 100) {
        return "translateY(20px) rotateZ(10deg)";
      } else if (animatePercent > 150) {
        return "translateY(0) rotateZ(0)";
      }
    }}};
`;

const Project = ({ item: { name, desc, tech, link }, i }) => {
  // calculates the skills's location on the screen
  const [percentShown, setPercentShow] = useState({
    item: 0,
  });
  const refItem = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const getHeight = (element) => element.offsetHeight;
    const elementPosition = topPosition(refItem.current);
    const elementHeight = getHeight(refItem.current);
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (elementPosition < scrollPosition) {
        // Element scrolled to
        let itemPercent =
          ((scrollPosition - elementPosition) * 100) / elementHeight;
        if (itemPercent < 0) itemPercent = 0;
        setPercentShow((prevState) => ({
          ...prevState,
          item: itemPercent,
        }));
      } else if (elementPosition > scrollPosition) {
        // Element scrolled away (up)
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Wrapper
      ref={refItem}
      animatePercent={percentShown.item}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: { md: "0rem", xs: "1rem" },
      }}
    >
      <Box
        component="a"
        href={link}
        sx={{
          ":hover": {
            cursor: "pointer",
            opacity: 0.8,
          },
          width: { md: "70%", xs: "100%" },
          backgroundColor: i % 2 === 0 ? "#2e7ad1" : "#31cec9",
          padding: "1rem",
          borderRadius: "15px",
          display: "flex",
          color: "white",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>
          {name}
        </Typography>
        <Typography>{desc}</Typography>
        <Typography sx={{ fontWeight: 600, mt: "1rem" }}>
          Technologies used:
        </Typography>
        <Typography variant="overline" sx={{ textTransform: "none" }}>
          {tech}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Project;
