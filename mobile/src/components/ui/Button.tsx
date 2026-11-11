import Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';
import { Pressable, Text } from 'react-native';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'md' | 'lg';

interface Props {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  /** lg — avtomobil rejimi uchun katta tugma (kamida 56 px) */
  size?: Size;
  icon?: ComponentProps<typeof Ionicons>['name'];
  disabled?: boolean;
  className?: string;
}

const variantBox: Record<Variant, string> = {
  primary: 'bg-brand-500 active:bg-brand-600',
  secondary: 'bg-white border border-slate-200 active:bg-slate-100 dark:bg-surface-cardDark dark:border-slate-700',
  ghost: 'bg-transparent active:bg-slate-100 dark:active:bg-slate-800',
  danger: 'bg-status-offline active:opacity-80',
};

const variantText: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-slate-900 dark:text-white',
  ghost: 'text-brand-600 dark:text-brand-400',
  danger: 'text-white',
};

const iconColor: Record<Variant, string> = {
  primary: '#FFFFFF',
  secondary: '#0F172A',
  ghost: '#059669',
  danger: '#FFFFFF',
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  className = '',
}: Props) {
  const sizeBox = size === 'lg' ? 'min-h-14 px-6' : 'min-h-11 px-4';
  const sizeText = size === 'lg' ? 'text-lg' : 'text-base';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      className={`flex-row items-center justify-center gap-2 rounded-xl ${sizeBox} ${variantBox[variant]} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}>
      {icon ? <Ionicons name={icon} size={size === 'lg' ? 24 : 18} color={iconColor[variant]} /> : null}
      <Text className={`font-semibold ${sizeText} ${variantText[variant]}`}>{label}</Text>
    </Pressable>
  );
}
