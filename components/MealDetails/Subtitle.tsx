import { Text, StyleSheet } from 'react-native';

type SubtitleProps = {
  children: string;
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
});

export const Subtitle = ({ children }: SubtitleProps) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};
