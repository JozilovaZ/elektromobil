import { Pressable, Text } from 'react-native';

interface Props {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

/** Filtrlar uchun tanlanadigan tugmacha */
export function Chip({ label, selected = false, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: selected }}
      className={`rounded-full border px-4 py-2 ${
        selected
          ? 'border-brand-500 bg-brand-500'
          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-surface-cardDark'
      }`}>
      <Text
        className={`text-sm font-medium ${selected ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>
        {label}
      </Text>
    </Pressable>
  );
}
