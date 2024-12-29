import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useSingerController } from '../../../controllers/singerController';
import SingleNews from './SingleNews';
import NewsSlider from './NewsSlider';
import PacmanLoader from "react-spinners/PacmanLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../css/style.css';

function Singer({ news, loading }) {
  const {
    getNewsByAuthor,
    sliderSettings,
    showSliders,
    toggleSlider,
  } = useSingerController(news);
  const newsAuthor = getNewsByAuthor(news);

  useEffect(() => {
    if (!loading) {
      document.title = "Singer";
    }
  }, [loading]);

  if(loading) return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <PacmanLoader
        color="#ff6f61"
        size={70}
        loading={loading}
      />
    </div>
  );

  return (
    <div className="cat-singer-news" style={{margin: '40px 0'}}>
      <Container>
        <Row>   
          {newsAuthor.map(({author, items}, index) => (
            <>
              <h2 key={index}>{author}</h2>
              <button
                onClick={() => toggleSlider(index)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginBottom: '30px',
                  width: 'fit-content',
                  marginLeft: '12px'
                }}
              >
                {showSliders[index] ? 'Hide News' : 'Show News'}
              </button>
              {showSliders[index] && (
                <NewsSlider
                  items={items}
                  settings={sliderSettings}
                  
                />
              )}                 
            </>
          ))}                         
        </Row>
      </Container>
    </div>
  );
}

export default Singer;