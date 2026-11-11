import { Text, View } from 'react-native';

import { Button, Card, Screen } from '@/components/ui';

/** Mashina profili va sozlamalar. 5-kunda to'ldiriladi. */
export default function ProfileScreen() {
  return (
    <Screen title="Profil" subtitle="Mashinangiz va sozlamalar">
      <Card className="mb-4">
        <Text className="text-sm text-slate-500 dark:text-slate-400">Mashina</Text>
        <Text className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
          Tanlanmagan
        </Text>
        <View className="mt-3">
          <Button label="Mashinani tanlash" variant="secondary" icon="car-sport" />
        </View>
      </Card>

      <Card className="gap-2">
        <Text className="text-sm text-slate-500 dark:text-slate-400">Sozlamalar (7-kun)</Text>
        <Text className="text-slate-900 dark:text-white">Til · Tungi rejim · Avtomobil rejimi</Text>
      </Card>
    </Screen>
  );
}
