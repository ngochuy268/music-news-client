import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../../css/style.css";
import { useEffect, useState } from "react";

function NewsSlider({ items, settings }) {
  

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(1); 

  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 2, items.length)); 
  };

  
  const chunkArray = (array, chunkSize) => {
    const result = [];
    const arrayCopy = [...array];
    while (arrayCopy.length > 0) {
      result.push(arrayCopy.splice(0, chunkSize));
    }
    return result;
  };

  const getProcessedChunks = (items) => {
    if (items.length <= 1) return [];

    const chunks = chunkArray([...items], 4);

    if (chunks.length > 0 && chunks[chunks.length - 1].length === 1) {
      const singleItem = chunks.pop()[0];
      const randomIndex = Math.floor(Math.random() * chunks.length);
      chunks[randomIndex].push(singleItem);
    }

    return chunks;
  };

  const chunkNews = getProcessedChunks(items);

  return isSmallScreen ? (
    <div style={{ margin: "20px 0" }}>
      {items.slice(0, visibleItems).map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <Col md={12} style={{ borderRadius: "10px", overflow: "hidden" }}>
            <div className="cn-img">
              <img
                src={require(`../../../img/${item.link_img}`)}
                alt={item.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <div className="cn-title" style={{ marginTop: "10px" }}>
                <Link
                  to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  target="_parent"
                >
                  {item.name}
                </Link>
              </div>
            </div>
          </Col>
        </div>
      ))}
      {visibleItems < items.length && (
        <button
          onClick={handleShowMore}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Show More
        </button>
      )}
    </div>
  ) : (
    <>
      {chunkNews.map((items, index) => (  
        <Slider {...settings} style={{ margin: "30px 0" }} key={index}>
          {items.map((item, index) => (
            <div key={index}>
              <Col md={11} style={{ borderRadius: "20px", overflow: "hidden" }}>
                <div className="cn-img">
                  <img
                    src={require(`../../../img/${item.link_img}`)}
                    alt={item.name}
                    style={{ width: "100%", borderRadius: "20px" }}
                  />
                  <div className="cn-title">
                    <Link
                      to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      target="_parent"
                    >
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
}

export default NewsSlider;
