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
        items: news.filter(item => item.type === type)
      }));
    };
  
    return {
      getRandomNews,
      getAllRandomNews,
      getNewsByTypes
    };
  };