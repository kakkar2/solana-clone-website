// import "./App.css";
import { Header, Footer } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Build, Home } from "./pages/index";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/build" exact element={<Build />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
