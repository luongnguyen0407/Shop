import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
