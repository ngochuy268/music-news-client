import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useTypeController } from '../../../controllers/typeController';
import SingleNews from './SingleNews';
import NewsSlider from './NewsSlider';
import PacmanLoader from "react-spinners/PacmanLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../css/style.css';

const Type = ({ news, loading }) => {

  const { typeName } = useParams();
  const {
    getTypeNews,
    getTypeInfo,
    getProcessedChunks,
    sliderSettings
  } = useTypeController(news, typeName);
  
  useEffect(() => {
    if (!loading) {
      const typeInfo = getTypeInfo();
      document.title = typeInfo.type;
    }
  }, [loading, getTypeInfo]);
 
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

  const typeNews = getTypeNews();
  const typeInfo = getTypeInfo();
  const chunkedArrays = getProcessedChunks(typeNews);

  return (
    <div className="cat-singer-news" style={{margin: '40px 0'}}>
      <Container>
        <Row>                    
          <h2>{typeInfo.type}</h2>
          {typeNews.length === 1 ? (
            <SingleNews news={typeNews[0]} />
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
};

export default Type;