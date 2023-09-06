import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ArticleView from "./components/ArticleView";
import TopicsPage from "./components/TopicsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="homePage">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticleView />} />
        <Route path="/topics/:topic" element={<TopicsPage />} />
      </Routes>
    </main>
  );
}

export default App;
