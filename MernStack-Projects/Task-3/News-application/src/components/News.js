import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=777b640438694448b1e9183ea3806d8f`
    )
      .then(res => res.json())
      .then(data => setArticle(data.articles || []));
  }, [category]);

  return (
    <div>
      <h2 className="category-title">{category.toUpperCase()} NEWS</h2>

      <div className="news-grid">
        {article.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
