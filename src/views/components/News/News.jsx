import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useMusicNewsController } from '../../../controllers/musicNewsController';
import RelatedNews from './RelatedNews';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';
import PacmanLoader from "react-spinners/PacmanLoader";
import '../../../css/style.css';

function News({ news, loading }) {

  const { articleTitle } = useParams();
  const {
    getArticle,
    getRelatedArticles,
    getRandomNews,
    getSliderSettings,
    getVideoOpts
  } = useMusicNewsController(news, articleTitle);

  useEffect(() => {
    if (!loading) {
      const article = getArticle();
      document.title = article.name;
    }
  }, [loading, getArticle]);


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

  const article = getArticle();
  const relatedArticles = getRelatedArticles(article);
  const random5News = getRandomNews(relatedArticles, 5);
  const videoOpts = getVideoOpts;
  const sliderSettings = getSliderSettings;

console.log(article)

  return (
    <div className="single-news">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="sn-container">
              <h1 className="sn-title">{article.name}</h1>
              <div className="sn-img">
                <img 
                  src={require(`../../../img/${article.link_img}`)} 
                  alt="News" 
                  style={{borderRadius: '15px'}}
                />
              </div>
              <div className="sn-content">
                <pre style={{whiteSpace: 'pre-wrap',wordWrap: 'break-word'}}>
                  {article.content}
                </pre>
                <h3>Link video</h3>
                <YouTube videoId={article.link_video} opts={videoOpts} />
              </div>
            </div>
            <RelatedNews 
              articles={relatedArticles}
              random5News={random5News}
              settings={sliderSettings}
            />
          </Col>
          <Col lg={4}>
            <Sidebar 
              articles={relatedArticles}
              random5News={random5News}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;