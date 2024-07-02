import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        {/* <Header /> */}
        <Layout>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </Main>
        </Layout>
        {/* <Footer /> */}
      </BrowserRouter>
    </ModalProvider>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // /login 경로에서 Header와 Footer 컴포넌트 제외
  const isLoginRoute = location.pathname === "/login";

  return (
    <>
      {!isLoginRoute && <Header />}
      {children}
      {!isLoginRoute && <Footer />}
    </>
  );
}

export default App;
