import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import HomePage from "./components/HomePage";
import ArticleView from "./components/articleView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="homePage">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticleView />} />
      </Routes>
    </main>
  );
}

export default App;
