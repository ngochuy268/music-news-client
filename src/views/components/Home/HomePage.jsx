import React, { useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";
import CatNews from "./CatNews";
import TopNews from "./TopNews";

function HomePage({ news, loading }) {
  useEffect(() => {
    document.title = "Home";
  }, []);

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

  return <>
    <TopNews news={news} loading={loading}/>
    <CatNews news={news} loading={loading}/>
  </>;
}

export default HomePage;