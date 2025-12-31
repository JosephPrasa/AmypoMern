import React from 'react';

const NewsItem = (p) => {
  return (
    <div className="news-card">
      <img
        src={p.image || 'https://placehold.co/400x250'}
        alt="news"
      />

      <div className="news-content">
        <h3>{p.title}</h3>
        <p>{p.description || 'No description available.'}</p>
        <a href={p.url} target="_blank" rel="noreferrer">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
