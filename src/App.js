import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavCenter from "./Common/Header/element/NavCenter";
// import Category from "./Common/Header/element/Category";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          {/* localhost:3000**으로 페이지가 바뀔 때 마다 보이는 것을 확인할 수 있다. 즉, 페이지 이동을 만들어준거임 */}
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:title" element={<Detail />} />
          <Route path="/product" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
