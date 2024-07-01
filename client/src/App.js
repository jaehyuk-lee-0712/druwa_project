import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Login from "./pages/Login";

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
