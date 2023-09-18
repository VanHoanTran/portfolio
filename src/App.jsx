import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Nav from "./components/Nav/Nav";
import Menus from "./components/common/Menus";
import { DarkModeProvider } from "./context/DarkModeContext";
function App() {
  return (
    <DarkModeProvider>
      <Layout>
        <Menus>
          <Nav />
        </Menus>
        <Main />
        <Footer />
      </Layout>
    </DarkModeProvider>
  );
}

export default App;
