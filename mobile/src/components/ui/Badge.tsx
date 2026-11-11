import { Text, View } from 'react-native';

interface Props {
  label: string;
  /** Hex rang — masalan colors.power.dc */
  color: string;
  /** solid — to'liq rang, soft — och fon */
  tone?: 'solid' | 'soft';
}

export function Badge({ label, color, tone = 'soft' }: Props) {
  const solid = tone === 'solid';
  return (
    <View
      className="self-start rounded-full px-2.5 py-1"
      style={{ backgroundColor: solid ? color : `${color}22` }}>
      <Text className="text-xs font-semibold" style={{ color: solid ? '#FFFFFF' : color }}>
        {label}
      </Text>
    </View>
  );
}
