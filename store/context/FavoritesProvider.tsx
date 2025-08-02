import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';

type FavoritesContext = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContext>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = useCallback((id: string) => {
    setFavorites((prev) => [id, ...prev]);
  }, []);

  const removeFavorite = useCallback((removedId: string) => {
    setFavorites((prev) => prev.filter((id: string) => id !== removedId));
  }, []);

  const value = useMemo(() => {
    return {
      ids: favorites,
      addFavorite,
      removeFavorite,
    };
  }, [favorites, addFavorite, removeFavorite]);

  return <FavoritesContext value={value}>{children}</FavoritesContext>;
};
