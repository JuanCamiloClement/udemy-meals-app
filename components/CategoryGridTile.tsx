import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UseNavigationProp } from "../types/props";

type CategoryGridTileProps = {
  categoryId: string;
  title: string;
  color: string;
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' })
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export const CategoryGridTile = ({ title, color, categoryId }: CategoryGridTileProps) => {
  const navigation = useNavigation<UseNavigationProp>();

  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate('MealsOverview', { categoryId, title })}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};