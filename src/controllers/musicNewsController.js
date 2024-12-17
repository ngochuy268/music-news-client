export const useMusicNewsController = (news, articleTitle) => {
    const getArticle = () => {
      return news.find(item => item.name.toLowerCase().replace(/\s+/g, '-') === articleTitle);
    };
  
    const getRelatedArticles = (article) => {
      return news.filter(item => item.author === article.author);
    };
  
    const getRandomNews = (articles, count = 5) => {
      const random = [];
      const totalNews = articles.length;
  
      if (totalNews >= count) {
        while (random.length < count) {
          const randomIndex = Math.floor(Math.random() * totalNews);
          const selectedNews = articles[randomIndex];
          if (!random.includes(selectedNews)) {
            random.push(selectedNews);
          }
        }
        return random;
      }
      return shuffleArray(articles.slice());
    };
  
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    const getSliderSettings = {
      autoplay: true,
      infinite: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 1 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  
    const getVideoOpts = {
      height: '640',
      width: '100%',
      playerVars: {
        autoplay: 0,
      },
    };
  
    return {
      getArticle,
      getRelatedArticles,
      getRandomNews,
      shuffleArray,
      getSliderSettings,
      getVideoOpts
    };
  };