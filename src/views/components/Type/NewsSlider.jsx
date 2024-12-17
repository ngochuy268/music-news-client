import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../css/style.css';

const NewsSlider = ({ chunkedArrays, settings }) => {
  return (
    <>
      {chunkedArrays.map((items, index) => (                      
        <Slider {...settings} key={index} style={{margin: '30px 0'}}>
          {items.map((item, index) => (                                               
            <div key={Math.random(index)}>                                  
              <Col md={11} style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="cn-img">
                  <img src={require(`../../../img/${item.link_img}`)} alt={item.name}/>
                  <div className="cn-title">
                    <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">
                      {item.name}
                    </Link>  
                  </div>
                </div>
              </Col>
            </div>
          ))}
        </Slider>  
      ))} 
    </>
  );
};

export default NewsSlider;