import { useCallback } from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";
import type { Category } from "../models/category";

export const CategoriesScreen = () => {
  const renderCategoryItem = useCallback(({ item }: { item: Category }) => {
    return (
      <CategoryGridTile title={item.title} color={item.color} />
    );
  }, [])

  const keyExtractor = useCallback((item: Category) => item.id, []);

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={keyExtractor}
      numColumns={2}
    />
  );
};