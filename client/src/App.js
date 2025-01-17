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
import Notice from "./pages/Notice";
import BoardWrite from "./pages/BoardWrite";
import BoardView from "./pages/BoardView";
import BoardEdit from "./pages/BoardEdit";
import BoardDelete from "./pages/BoardDelete";
import StoreInfo from "./components/StoreInfo";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
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
                <Route path="/Notice" element={<Notice />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/map" element={<Map />} />
                <Route path="/boardwrite" element={<BoardWrite />} />
                <Route path="/boardView/:id" element={<BoardView />} />
                <Route path="/BoardEdit/:id" element={<BoardEdit />} />
                <Route path="/BoardDelete" element={<BoardDelete />} />
                <Route path="/store" element={<StoreInfo />} />
              </Routes>
            </Main>
          </Layout>
          {/* <Footer /> */}
        </BrowserRouter>
      </ModalProvider>
    </UserContextProvider>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // /login 경로에서 Header와 Footer 컴포넌트 제외
  const isLoginRoute =
    location.pathname === "/login" ||
    location.pathname === "/map" ||
    location.pathname === "/";

  return (
    <>
      {!isLoginRoute && <Header />}
      {children}
      {!isLoginRoute && <Footer />}
    </>
  );
}

export default App;
