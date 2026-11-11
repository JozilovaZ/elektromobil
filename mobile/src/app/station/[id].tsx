import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

import { Card, Screen } from '@/components/ui';

/** Stansiya kartochkasi. 4-kunda to'liq qilinadi. */
export default function StationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Screen>
      <Card>
        <Text className="text-lg font-semibold text-slate-900 dark:text-white">Stansiya: {id}</Text>
        <Text className="mt-1 text-slate-500 dark:text-slate-400">
          Quvvat, ulagichlar, narx, qulayliklar, sharhlar — 4-kun
        </Text>
      </Card>
    </Screen>
  );
}
