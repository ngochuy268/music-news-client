import { useState, useEffect, useRef } from 'react';

export const useNavbarController = (news) => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const getUniqueCategories = () => {
    return {
      types: [...new Set(news.map(item => item.type))],
      authors: [...new Set(news.map(item => item.author))]
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const results = news.filter(item => 
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.type.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    if(e.target.value) {
      handleSearch(e);
    } else {
      setShowResults(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    isSticky,
    searchValue,
    searchResults,
    showResults,
    searchRef,
    getUniqueCategories,
    handleSearch,
    handleInputChange
  };
};