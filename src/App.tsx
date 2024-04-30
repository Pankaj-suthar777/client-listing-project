import { Route, Routes } from "react-router-dom";

import ListingPage from "./pages/ListingPage";
import HeaderComponent from "./components/HeaderComponent";
import ErrorPage from "./pages/ErrorPage";
import Map from "./pages/Map";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-white relative">
        <HeaderComponent />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:id" Component={ListingPage} />
          <Route path="/map" Component={Map} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
