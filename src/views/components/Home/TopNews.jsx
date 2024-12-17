import { useHomeController } from '../../../controllers/homeController';
import { Row, Col, Container } from "react-bootstrap";
import '../../../css/style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TopNews({ news, loading }) {

  const { getRandomNews, getAllRandomNews } = useHomeController(news);

  if(loading) return;


  const randomNewsWith4News = getRandomNews();
  const randomNews = getAllRandomNews();

  const NextArrow = ({ onClick }) => (
    <div className='arrow next' onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className='arrow prev' onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  const tnSlider = {
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow /> ,
    nextArrow: <NextArrow />
};

const linkStyles = {
    fontSize : '25px',
    '@media (maxWidth: 768px)': { 
        fontSize: '14px',
    },
    '@media (maxWidth: 480px)': { 
        fontSize: '12px',
    },
};

    return <>  
        <div className='top-news'>
            <Container>
                <Row>
                    <Col md={6} className='tn-left' >
                        <Slider {...tnSlider} >
                            {randomNews.map((item,index) => (
                                <div key={Math.random(index)} >    
                                    <div className='tn-img' to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">
                                        <img src={require(`../../../img/${item.link_img}`)} alt="news" style={{ borderRadius: '10px', overflow: 'hidden' }}/>
                                        <div className='tn-title'style={{ borderRadius: '10px', overflow: 'hidden' }} >
                                            <Link style={linkStyles} to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name} </Link>                                       
                                        </div>                                   
                                    </div>  
                                </div>
                            ))}
                        </Slider>
                    </Col>
                    <Col md={6} className='tn-right' >
                        <Row style={{ borderRadius: '10px', overflow: 'hidden' }}>
                            {randomNewsWith4News.map((item,index) => (
                            <Col md={6} key={Math.random(index)} >
                                <div className='tn-img'>
                                    <img src={require(`../../../img/${item.link_img}`)} alt={`News ${index+1}`} />
                                    <div className='tn-title'>
                                        <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>
                                    </div>
                                </div>
                            </Col>
                            ))}
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    </>
}

export default TopNews;