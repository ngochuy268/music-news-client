import React, { useEffect } from 'react';
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
  const { singerName } = useParams();
  const {
    getSingerNews,
    getSingerInfo,
    getProcessedChunks,
    sliderSettings
  } = useSingerController(news, singerName);

  useEffect(() => {
    if (!loading) {
      const singerInfo = getSingerInfo();
      document.title = singerInfo.type;
    }
  }, [loading, getSingerInfo]);

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

  const singerNews = getSingerNews();
  const singerInfo = getSingerInfo();
  const chunkedArrays = getProcessedChunks(singerNews);

  

  return (
    <div className="cat-singer-news" style={{margin: '40px 0'}}>
      <Container>
        <Row>                    
          <h2>{singerInfo.author}</h2>
          {singerNews.length === 1 ? (
            <SingleNews news={singerNews[0]} />
          ) : (
            <NewsSlider 
              chunkedArrays={chunkedArrays} 
              settings={sliderSettings} 
            />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Singer;