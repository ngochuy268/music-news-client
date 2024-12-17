export const useTypeController = (news, typeName) => {
    const getTypeNews = () => {
      return news.filter(item => item.type.toLowerCase().replace(/\s+/g, '-') === typeName);
    };
  
    const getTypeInfo = () => {
      return news.find(item => item.type.toLowerCase().replace(/\s+/g, '-') === typeName);
    };
  
    const chunkArray = (array, chunkSize) => {
      const result = [];
      const arrayCopy = [...array];
      while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, chunkSize));
      }
      return result;
    };
  
    const getProcessedChunks = (typeNews) => {
      if (typeNews.length <= 1) return [];
  
      const chunks = chunkArray([...typeNews], 4);
  
      if (chunks.length > 0 && chunks[chunks.length - 1].length === 1) {
        const singleItem = chunks.pop()[0];
        const randomIndex = Math.floor(Math.random() * chunks.length);
        chunks[randomIndex].push(singleItem);
      }
  
      return chunks;
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
      getTypeNews,
      getTypeInfo,
      getProcessedChunks,
      sliderSettings
    };
  };