import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "./App.css";

const { Meta } = Card;


function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76a0b26361df4995b1ff2cb651279374"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
          
      {news &&
        news.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: "70%" }}
              cover={<img alt="Not Found" src={item.urlToImage} />}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button>
              </a>
            </Card>
          );
        })}
    </div>
  );
}

export default App;
