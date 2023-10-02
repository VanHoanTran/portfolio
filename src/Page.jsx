import { useLocation } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import { DarkModeProvider } from "./context/DarkModeContext";
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
