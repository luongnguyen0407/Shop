import Main from "pages/Main";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import MainLoading from "components/loading/MainLoading";
const DetailProduct = lazy(() => import("pages/DetailProduct"));
const NewProduct = lazy(() => import("pages/admin/NewProduct"));
const AdminLayout = lazy(() => import("components/Layouts/AdminLayout"));
const Dashboard = lazy(() => import("pages/admin/Dashboard"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const MainLayout = lazy(() => import("components/Layouts/MainLayout"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<MainLoading />}>
        <ToastContainer theme="colored" />
        <Main>
          <Routes>
            <Route path="/">
              <Route path="login" element={<LoginPage />}></Route>
              <Route path="register" element={<RegisterPage />}></Route>
              <Route element=<MainLayout />>
                <Route index element=<HomePage />></Route>
                <Route path="product/:slug" element=<DetailProduct />></Route>
              </Route>
              <Route element=<AdminLayout />>
                <Route path="manage/dashboard" element=<Dashboard />></Route>
                <Route path="manage/newproduct" element=<NewProduct />></Route>
              </Route>
            </Route>
          </Routes>
        </Main>
      </Suspense>
    </div>
  );
}

export default App;
