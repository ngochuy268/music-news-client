import { useEffect, useState } from "react";

export const useSingerController = (news) => {
  const [showSliders, setShowSliders] = useState([]);
  

  const getNewsByAuthor= () => {
    const authors = [...new Set(news.map(item => item.author))];
    return authors.map(author => ({
      author,
      items: news.filter(item => item.author === author)
    }));
  };


  useEffect(() => {
    if (showSliders.length !== getNewsByAuthor().length) {
      setShowSliders(getNewsByAuthor().map(() => false)); 
    }
  }, [news]);


  const toggleSlider = (index) => {
    setShowSliders((prev) =>
      prev.map((state, i) => (i === index ? !state : state)) 
    );
  };

  const sliderSettings = {
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 2,
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


  return {
    getNewsByAuthor,
    sliderSettings,
    showSliders,
    toggleSlider
  };
};
