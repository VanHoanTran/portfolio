import { useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./common/Footer";
import Layout from "./common/Layout";
import Main from "./common/Main";
import Nav from "./Nav";
import Projects from "./Projects";
import { DarkModeProvider } from "../context/DarkModeContext";
import { useEffect } from "react";

function Page() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return (
    <DarkModeProvider>
      <Layout>
        <Nav />
        <Main>
          <About />
          <Education />
          <Projects />
          <Contact />
        </Main>
        <Footer />
      </Layout>
    </DarkModeProvider>
  );
}

export default Page;
