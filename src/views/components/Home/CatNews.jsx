import { useHomeController } from '../../../controllers/homeController';
import '../../../css/style.css';
import { Container, Row } from "react-bootstrap";

import { Link } from 'react-router-dom';

function CatNews({ news, loading }) {
  const { getNewsByTypes, truncate } = useHomeController(news);
  if(loading) return;
  const newsByTypes = getNewsByTypes();


  return (    
    <>
      <div className="cat-news">
        <Container>
          {newsByTypes.map(({ type, items }, index) => (
            <Row key={index}>                    
              <h2>{type}</h2>
              <div className="popular-cat-news-wrapper">
                {items.map((item, index) => (
                  <div className="popular-cat-news" key={index}>
                    <div className="popular-cat-news-img">
                      <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">
                        <img src={require(`../../../img/${item.link_img}`)} alt="ahihi" />
                      </Link>
                    </div>
                    <div className="popular-cat-news-content">
                      <h3>{item.name}</h3>
                      <p>{truncate(item.content, 200)}</p>
                    </div>
                  </div>
                ))}  
              </div>
            </Row>
          ))}    
        </Container>
      </div>
    </>
  );
}

export default CatNews;