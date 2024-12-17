const fetchNews = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/pop_music`);
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch news');
    }
  };
  
  export default {
    fetchNews
  };