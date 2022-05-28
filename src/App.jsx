import React from "react";
import ArticleNews from "./components/ArticleNews";
import Comments from "./components/Comments";
import Header from "./components/Header";

const App = () => {
  return (
    <main>
      <Header />
      <article
        style={{ padding: "40px 0", backgroundColor: "#242526", color: "#fff" }}
      >
        <div
          className="article-container"
          style={{ margin: "0 auto", width: "75vw" }}
        >
          <ArticleNews />
          <Comments />
        </div>
      </article>
    </main>
  );
};

export default App;
