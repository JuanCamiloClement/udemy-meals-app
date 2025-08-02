import { ComponentProps } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  icon: ComponentProps<typeof Ionicons>['name'];
  color: string;
  onPress: () => void;
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export const IconButton = ({ icon, color, onPress }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};
