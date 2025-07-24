import React, { createContext, useContext, useReducer, useEffect } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'CLEAR_FAVORITES':
      return { items: [] };
    
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, { items: [] }, () => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? { items: JSON.parse(savedFavorites) } : { items: [] };
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.items));
  }, [state.items]);

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: productId });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const isFavorite = (productId) => {
    return state.items.some(item => item.id === productId);
  };

  const getFavoritesCount = () => {
    return state.items.length;
  };

  return (
    <FavoritesContext.Provider value={{
      items: state.items,
      addToFavorites,
      removeFromFavorites,
      clearFavorites,
      isFavorite,
      getFavoritesCount
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export { FavoritesProvider, useFavorites };
