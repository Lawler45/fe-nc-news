import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ArticleView from "./components/ArticleView";
import CodingPage from "./components/CodingPage";
import FootballPage from "./components/FootballPage";
import CookingPage from "./components/CookingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="homePage">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticleView />} />
        <Route path="/topics/coding" element={<CodingPage />} />
        <Route path="/topics/football" element={<FootballPage />} />
        <Route path="/topics/cooking" element={<CookingPage />} />
      </Routes>
    </main>
  );
}

export default App;
