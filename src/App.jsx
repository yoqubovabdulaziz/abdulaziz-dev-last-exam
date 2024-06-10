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
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/single-product/SingleProduct";
import About from "./pages/about/About";
import ShippingPayment from "./pages/shipping-payment/ShippingPayment";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contact from "./pages/contact/Contact";
import BlogComp from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import NotFound from "./components/not-found/NotFound";
import Auth from "./pages/auth/Auth";


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
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping-payment" element={<ShippingPayment />} />
          <Route path="/return" element={<Return />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogComp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Auth />}>
            <Route path="/admin" element={<Admin />}>
              <Route path="create-product" element={<CreateProduct />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="create-category" element={<CreateCategory />} />
              <Route path="manage-category" element={<ManageCategory />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
