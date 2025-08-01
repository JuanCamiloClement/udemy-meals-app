import { useCallback } from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';
import type { Category } from '../types/category';

export const CategoriesScreen = () => {
  const renderCategoryItem = useCallback(({ item }: { item: Category }) => {
    return <CategoryGridTile title={item.title} color={item.color} categoryId={item.id} />;
  }, []);

  const keyExtractor = useCallback((item: Category) => item.id, []);

  return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={keyExtractor} numColumns={2} />;
};
