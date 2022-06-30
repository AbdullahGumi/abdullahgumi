import { useEffect } from "react";

// Comps
import Hero from "../components/Hero";
import Info from "../components/Info";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Box } from "@mui/material";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        marginLeft: { md: "0rem", xs: ".7rem" },
      }}
    >
      <Hero />
      <Info />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </Box>
  );
}
