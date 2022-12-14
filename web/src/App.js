import "./App.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";///npm i react-router-dom
import { ThemeProvider } from "styled-components"; /////npm i styled components from npm react-router-dom(search(styled components))
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 29 29 .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98 84 243 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0 0 0 0.02) 0px 1px 3px 0px, rgba(27 31 35 0.15) 0px 0px 0px 1px;",
      shawdowSupport: "rgba(0 0 0 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <BrowserRouter>
          {/* //////////we need header & footer all pages... */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path='/Products' element={<Products />}/>
            <Route path="/Contact" element={<Contact />} />
            <Route path='/SingleProduct/:id' element={<SingleProduct />}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
          <GoToTop />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
