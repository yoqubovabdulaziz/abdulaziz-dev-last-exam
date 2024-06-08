import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProduct from "./pages/admin/manage-product/ManageProduct";
import CreateCategory from "./pages/admin/create-category/CreateCategory";
import ManageCategory from "./pages/admin/manage-category/ManageCategory";
import { ToastContainer } from 'react-toastify'


function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const isAdminRoute = pathname.includes("admin");

  return (
    <>
      <Header />
      <div className={`wrapper ${isAdminRoute ? "remove__wrapper" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
