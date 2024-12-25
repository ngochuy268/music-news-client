import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./views/layouts/index";
import ScrollToTopButton from "./ScrollToTop";
import { publicRoutes } from './routes/publicRoutes';
import { adminRoutes } from './routes/adminRoutes';
import { useNewsController } from './controllers/newsController';

function App() {
  const { news, loading } = useNewsController();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout news={news} loading={loading}/>}>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.element
                  news={news}
                  loading={loading}
                />
              }
            />
          ))}
        </Route>
        
        {adminRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      <ScrollToTopButton />
    </>
  );
}



export default App;