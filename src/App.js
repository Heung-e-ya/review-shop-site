import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetail from "./Page/ProductDetail";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import NavMenu from "./components/NavMenu";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// 1. 페이지 구성 - 전체상품페이지, 로그인 , 상품디테일페이지 v
// 2. (1)전체 상품 페이지
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품디테이을 눌렀으나, 로그인이 안되어있을경우에는 로그인페이지가 먼저 나온다
// 5. 로그인이 되어야 상품페이지를 볼 수 있다
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인해야 볼 수 있음
// 7. 로그인 하면 로그아웃 로그아웃하면 로그인으로 표시
// 8. 상품을 검색할 수 있다
function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
