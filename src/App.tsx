import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import HeaderComponent from "./components/HeaderComponent";
import ErrorPage from "./pages/ErrorPage";
import Map from "./pages/Map";

function App() {
  return (
    <>
      <div className="bg-white ">
        <HeaderComponent />
        <Routes>
          <Route path="/" Component={ErrorPage} />
          <Route path="/:id" Component={Home} />
          <Route path="/map" Component={Map} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
