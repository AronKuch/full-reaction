import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import ArticleListPage from "./pages/articleslist.js";
import ArticlePage from "./pages/article.js";
import NavBar from "./navbar.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articlelist" element={<ArticleListPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
