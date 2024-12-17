import { useHomeController } from '../../../controllers/homeController';
import '../../../css/style.css';
import { Container, Row, Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function CatNews({ news, loading }) {

  const { getNewsByTypes } = useHomeController(news);

  if(loading) return;

  const newsByTypes = getNewsByTypes();

  const settings = {
    autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1 }
        }
        ]
  };




  return (
    <div className="cat-news">
      <Container>
        {newsByTypes.map(({ type, items }, index) => (
          <Row key={index}>                    
            <h2>{type}</h2>
            <Slider {...settings}>    
              {items.map((item, index) => (
                <div key={Math.random(index)}>
                  <Col md={11} style={{ borderRadius: '10px', overflow: 'hidden' }}>
                    <div className="cn-img" to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">
                      <img src={require(`../../../img/${item.link_img}`)} alt="ahihi" />
                      <div className="cn-title" > 
                        <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>  
                      </div>
                    </div>
                  </Col>
                </div>
              ))}   
            </Slider>                
          </Row>
        ))}    
      </Container>
    </div>
  );
}

export default CatNews;