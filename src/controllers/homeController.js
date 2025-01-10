export const useHomeController = (news) => {
    // Logic cho TopNews
    const getRandomNews = () => {
      const slicedArray = news.slice(0, 4);
      return slicedArray.sort(() => Math.random() - 0.5);
    };
  
    const getAllRandomNews = () => {
      return news.sort(() => Math.random() - 0.5);
    };
  
    // Logic cho CatNews
    const getNewsByTypes = () => {
      const types = [...new Set(news.map(item => item.type))];
      return types.map(type => ({
        type,
        items: news
        .filter(item => item.type === type) 
        .sort(() => Math.random() - 0.5) 
        .slice(0, 4) 
      }));
    };

    // Truncate
    const truncate = (content, maxLength) => {
      if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
      }
      return content;
    }
  
    return {
      getRandomNews,
      getAllRandomNews,
      getNewsByTypes,
      truncate
    };
  };