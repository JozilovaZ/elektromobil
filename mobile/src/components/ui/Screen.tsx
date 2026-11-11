import type { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  title?: string;
  subtitle?: string;
  /** false bo'lsa — xarita kabi to'liq ekranli kontent uchun */
  scroll?: boolean;
  children: ReactNode;
}

export function Screen({ title, subtitle, scroll = true, children }: Props) {
  const insets = useSafeAreaInsets();

  const header = title ? (
    <View className="mb-4">
      <Text className="text-2xl font-bold text-slate-900 dark:text-white">{title}</Text>
      {subtitle ? (
        <Text className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</Text>
      ) : null}
    </View>
  ) : null;

  if (!scroll) {
    return (
      <View className="flex-1 bg-surface-light dark:bg-surface-dark" style={{ paddingTop: insets.top }}>
        {children}
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-surface-light dark:bg-surface-dark"
      contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: 32, paddingHorizontal: 16 }}>
      {header}
      {children}
    </ScrollView>
  );
}
