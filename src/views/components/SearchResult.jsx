import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const SearchResult = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <>
            <div className="search-result">
                <Container>
                    <Row>
                    {results.length > 0 ? (
                        results.map((item, index) => (
                        <Col lg={4} key={index}>
                            <div className="cn-img">
                            <img src={require(`../../img/${item.link_img}`)} alt={item.name} />
                            <div className="cn-title">
                                <Link to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`} target="_parent">
                                {item.name}
                                </Link>
                            </div>
                            </div>
                        </Col>
                        ))
                    ) : (
                        <div>No results found</div>
                    )}                       
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SearchResult;