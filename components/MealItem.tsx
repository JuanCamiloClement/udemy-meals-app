import {
  View,
  Text,
  Pressable,
  Image,
  Platform,
  StyleSheet
} from "react-native";

import type { Meal } from "../types/meal";

type MealItemProps = Pick<Meal, 'title' | 'imageUrl' | 'duration' | 'complexity' | 'affordability'>

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});

export const MealItem = ({ title, imageUrl, duration, complexity, affordability }: MealItemProps) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration.toString()}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}