import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <ToastContainer theme="colored" />
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
