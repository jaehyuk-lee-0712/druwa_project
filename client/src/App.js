import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import List from "./pages/List";
import Board from "./pages/Board";
import Test from "./pages/Test";
import MyPage from "./pages/MyPage";
import Map from "./pages/Map";

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        {/* <Header /> */}
        <Layout>
          <Main>
            <Routes>
              <Route path="/*" element={<Test />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/list" element={<List />} />
              <Route path="/board" element={<Board />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/map" element={<Map />} />
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
  const isLoginRoute =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <>
      {!isLoginRoute && <Header />}
      {children}
      {!isLoginRoute && <Footer />}
    </>
  );
}

export default App;
