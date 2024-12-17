import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../css/style.css';

function SingleRelatedNews({ article }) {
  return (
    <div className="sn-related-news" style={{borderRadius: '15px'}}>
      <div className="sn-related-news-wrapper" style={{ borderRadius: '15px', overflow: 'hidden'}}>
        <img src={require(`../../../img/${article.link_img}`)} alt={article.name} style={{width: '100%'}} />
        <div className="sn-title">
          <Link to={`/${article.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{article.name}</Link>
        </div>
      </div>
    </div>
  );
}

function RelatedNewsSlider({ articles, settings }) {
  return (
    <Slider {...settings}>
      {articles.map((item, index) => (
        <div className="sn-related-news" key={Math.random(index)} >
          <div className="sn-related-news-wrapper" style={{ borderRadius: '15px', overflow: 'hidden'}}>
            <img 
              src={require(`../../../img/${item.link_img}`)} 
              alt={item.name}  
              style={{width: '100%', borderRadius: '15px'}}
            />
            <div className="sn-title">
              <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">{item.name}</Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

function RelatedNews({ articles, random5News, settings }) {
  return (
    <div className="sn-related">
      <h2>Related News</h2>            
      {articles.length === 1 ? (
        <SingleRelatedNews article={articles[0]} />
      ) : articles.length > 1 && articles.length < 5 ? (
        <RelatedNewsSlider articles={articles} settings={settings} />
      ) : (
        <RelatedNewsSlider articles={random5News} settings={settings} />
      )}
    </div>
  );
}

export default RelatedNews;