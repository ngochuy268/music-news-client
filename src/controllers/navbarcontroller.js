import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavbarController = (news) => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  // ------------------------------------------

  const getUniqueCategories = () => {
    return {
      types: [...new Set(news.map(item => item.type))],
      authors: [...new Set(news.map(item => item.author))]
    };
  };

   // ------------------------------------------

  const handleSearch = (e) => {
    e.preventDefault();
    const results = news.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.type.toLowerCase().includes(searchValue.toLowerCase())
    );
    navigate('/search', { state: { results } });
    setSearchValue('');
  };

   // ------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return {
    isSticky,
    searchValue,
    handleInputChange,
    getUniqueCategories,
    handleSearch,
  };
};