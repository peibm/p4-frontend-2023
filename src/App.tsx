import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeGrid from "./pages/AnimeGrid";
import DetailsPage from "./pages/DetailsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimeGrid />} />
        <Route path="/anime/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
