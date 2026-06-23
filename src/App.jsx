import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <>
      <Navbar />
      <BreakingNews />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/news/:id"
          element={<NewsDetails />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;