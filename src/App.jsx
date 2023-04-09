import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
