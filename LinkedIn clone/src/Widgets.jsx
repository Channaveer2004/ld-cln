import React from 'react';
import "./widget.css";

function Widgets() {
    const newsArticles = [
      { heading: "React 18 Released", subtitle: "Top news - 10234 readers" },
      { heading: "New JavaScript Features", subtitle: "Top news - 7568 readers" },
      { heading: "Electric Cars Gain Popularity", subtitle: "Cars & auto - 4213 readers" },
      { heading: "Bitcoin Hits $30k", subtitle: "Crypto - 15000 readers" },
      { heading: "Vue vs. React: Which is Better?", subtitle: "Code - 3892 readers" },
      { heading: "Next.js 12: What's New?", subtitle: "Top news - 8321 readers" },
    ];
    


  return (
    <div className='widget'>
      <div className='widget_header'>
        <h2>LinkedIn News</h2>
        <i className='info_icon'></i>
      </div>
      <div className='widget_articles'>
        {newsArticles.map((article, index) => (
          <div key={index} className='widget_article'>
            <div className='article_dot'></div>
            <div className='article_details'>
              <h3>{article.heading}</h3>
              <p>{article.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Widgets;
