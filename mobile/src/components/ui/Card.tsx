import type { ReactNode } from 'react';
import { Pressable, View } from 'react-native';

interface Props {
  children: ReactNode;
  onPress?: () => void;
  className?: string;
}

const base = 'rounded-card bg-surface-card p-4 border border-slate-100 dark:bg-surface-cardDark dark:border-slate-800';

export function Card({ children, onPress, className = '' }: Props) {
  if (onPress) {
    return (
      <Pressable onPress={onPress} className={`${base} active:opacity-80 ${className}`}>
        {children}
      </Pressable>
    );
  }
  return <View className={`${base} ${className}`}>{children}</View>;
}
