import styled from "styled-components";
import SmoothList from "react-smooth-list";
import { Link } from "react-scroll";

// Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Wrapper = styled(SmoothList)`
  min-height: 100vh;
  display: flex;

  padding-top: 4rem;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const Scroll = styled(Box)`
  margin-top: 4rem;
  width: 70px;
  border-radius: 124px;
  box-shadow: 0px 15px 40px rgba(20, 20, 31, 0.16);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export default function Hero() {
  return (
    <section>
      <Box className="container" sx={{ marginTop: "3rem" }}>
        <Wrapper transitionDuration={1000}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 40, md: 64 },
                fontWeight: 700,
              }}
            >
              Abdullah Gumi
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 18 } }}>
              React Developer | React Native Developer
            </Typography>
          </Box>
          <Link to="info" smooth={true} style={{ cursor: "pointer" }}>
            <Scroll>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29783 0.115592C9.00639 0.0643052 8.75 0.296847 8.75 0.592763V3.45354C8.75 3.6519 8.87095 3.82656 9.03588 3.93675C9.53908 4.27293 9.87 4.84689 9.87 5.49998V7.49998C9.87 8.52998 9.03 9.37998 8 9.37998C6.96 9.37998 6.12 8.52998 6.12 7.49998V5.49998C6.12 4.8467 6.45831 4.27259 6.96394 3.93645C7.12913 3.82664 7.25 3.6519 7.25 3.45354V0.593405C7.25 0.297259 6.99352 0.0646167 6.70187 0.116043C5.15243 0.389257 3.76579 1.13419 2.7 2.19998C1.34 3.55998 0.5 5.43998 0.5 7.49998V12.5C0.5 16.63 3.87 20 8 20C12.13 20 15.5 16.63 15.5 12.5V7.49998C15.5 3.80949 12.813 0.734195 9.29783 0.115592Z"
                  fill="#14141F"
                />
              </svg>
              <span>Scroll</span>
            </Scroll>
          </Link>
        </Wrapper>
      </Box>
    </section>
  );
}
