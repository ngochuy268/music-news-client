import { Link } from 'react-router-dom';
import '../../../css/style.css';



function NewsList({ articles }) {
  return (
    <>
      {articles.map((item, index) => (
        <div className="nl-item" key={Math.random(index)}>
          <Link 
            className="nl-img" 
            to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
            target="_parent"
          >
            <img 
              src={require(`../../../img/${item.link_img}`)} 
              style={{ borderRadius: '7px', overflow: 'hidden'}}
              alt={item.name}
            />
          </Link>
          <div className="nl-title">
            <Link 
              to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
              target="_parent"
            >
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

function Sidebar({ articles, random5News }) {
  return (
    <div className="sidebar">            
      <div className="sidebar-widget">
        <h2 className="sw-title">In This Category</h2>
        <div className="news-list">
          {articles.length < 5 ? (
            <NewsList articles={articles} />
          ) : (
            <NewsList articles={random5News} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;