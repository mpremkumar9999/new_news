import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import Loading from './Loading';
import './News.css';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: props.country,
            category: props.category,
            apiKey: props.apiKey
          },
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        });

        if (response.status !== 200) {
          throw new Error(`API Error: ${response.status}`);
        }

        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [props.country, props.category, props.apiKey]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="news-container">
      {articles.length > 0 ? (
        articles.map((article) => <NewsItem key={article.url} article={article} />)
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
}

export default News;
