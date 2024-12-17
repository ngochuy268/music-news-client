import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../../css/style.css';

const SingleNews = ({ news }) => {
  return (
    <div>
      <Col md={12} className="d-flex justify-content-center" style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <div className="cn-img"> 
          <img src={require(`../../../img/${news.link_img}`)} alt={news.name}/>
          <div className="cn-title">
            <Link to={`/${news.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">
              {news.name}
            </Link>  
          </div>
        </div>
      </Col>
    </div>
  );
};

export default SingleNews;