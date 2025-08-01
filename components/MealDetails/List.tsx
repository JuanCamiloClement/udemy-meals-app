import { Text, View, StyleSheet } from 'react-native';

type ListProps = {
  data: string[];
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});

export const List = ({ data }: ListProps) => {
  return data.map((element) => (
    <View key={element} style={styles.listItem}>
      <Text style={styles.itemText}>{element}</Text>
    </View>
  ));
};
