import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useSingerController } from '../../../controllers/singerController';
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
          {newsAuthor.map(({author,avatar, items}, index) => (
            <div className="wrapper">
              <div className='ribbon'>News</div>
                <div className="avatar-wrapper">
                <img src={`/avatar/${avatar}`} className='avatar' loading="lazy"></img>
                <h2 key={index}>{author}</h2>
              </div>
              <button onClick={() => toggleSlider(index)} className='show-hide-btn'>
                {showSliders[index] ? 'Hide' : 'Show'}
              </button>
              {showSliders[index] && (
                <NewsSlider
                  items={items}
                  settings={sliderSettings}                  
                />
              )}              
            </div>
          ))}                         
        </Row>
      </Container>
    </div>
  );
}

export default Singer;