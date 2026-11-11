import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

import { Badge, Button, Screen } from '@/components/ui';
import colors from '@/theme/colors';

/** Xarita ekrani. 2-kunda MapLibre xaritasi shu yerga qo'yiladi. */
export default function MapScreen() {
  return (
    <Screen scroll={false}>
      <View className="flex-1 items-center justify-center gap-4 px-6">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900">
          <Ionicons name="map" size={40} color={colors.brand[600]} />
        </View>
        <Text className="text-center text-xl font-bold text-slate-900 dark:text-white">
          Xarita shu yerda bo'ladi
        </Text>
        <Text className="text-center text-slate-500 dark:text-slate-400">
          2-kun: MapLibre + O'zbekiston bo'yicha stansiyalar markerlari
        </Text>
        <View className="flex-row gap-2">
          <Badge label="AC 7–22 kVt" color={colors.power.ac} />
          <Badge label="DC 40–60" color={colors.power.dc} />
          <Badge label="DC 120+" color={colors.power.ultra} />
        </View>
      </View>

      <View className="absolute bottom-4 left-4 right-4">
        <Button label="Eng yaqin stansiya" icon="flash" size="lg" />
      </View>
    </Screen>
  );
}
