import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { Badge, Card, Chip, Screen } from '@/components/ui';
import colors from '@/theme/colors';

const filters = ['GB/T', 'CCS2', 'CHAdeMO', 'DC 120+', '24/7'];

/** Stansiyalar ro'yxati. 3-kunda mock ma'lumot va haqiqiy filtrlash qo'shiladi. */
export default function StationsScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (f: string) =>
    setSelected((s) => (s.includes(f) ? s.filter((x) => x !== f) : [...s, f]));

  return (
    <Screen title="Stansiyalar" subtitle="Yaqinlik bo'yicha saralangan">
      <View className="mb-4 flex-row flex-wrap gap-2">
        {filters.map((f) => (
          <Chip key={f} label={f} selected={selected.includes(f)} onPress={() => toggle(f)} />
        ))}
      </View>

      {/* Namuna kartochka — dizayn tizimini ko'rsatish uchun */}
      <Card onPress={() => router.push('/station/demo')}>
        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-2">
            <Text className="text-base font-semibold text-slate-900 dark:text-white">
              Namuna stansiya
            </Text>
            <Text className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
              Toshkent sh. · 2,4 km
            </Text>
          </View>
          <Badge label="Bo'sh 2/4" color={colors.status.free} tone="solid" />
        </View>
        <View className="mt-3 flex-row gap-2">
          <Badge label="DC 120 kVt" color={colors.power.ultra} />
          <Badge label="GB/T" color={colors.brand[600]} />
        </View>
      </Card>
    </Screen>
  );
}
