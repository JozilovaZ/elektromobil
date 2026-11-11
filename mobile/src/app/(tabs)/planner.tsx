import { useState } from 'react';
import { Text, View } from 'react-native';

import { Button, Card, Chip, Screen } from '@/components/ui';
import type { Priority } from '@/types';

const priorities: { key: Priority; label: string }[] = [
  { key: 'fast', label: 'Tezroq' },
  { key: 'cheap', label: 'Arzonroq' },
  { key: 'comfort', label: 'Qulaylik' },
];

/** Uzoq yo'l rejalashtiruvchi. 6-kunda to'liq UI qilinadi. */
export default function PlannerScreen() {
  const [priority, setPriority] = useState<Priority>('fast');

  return (
    <Screen title="Yo'l rejasi" subtitle="Uzoq safar uchun zaryad to'xtashlari">
      <Card className="mb-4 gap-3">
        <Field label="Qayerdan" value="Joriy joylashuv" />
        <Field label="Qayerga" value="Masalan: Xiva" muted />
      </Card>

      <Text className="mb-2 font-semibold text-slate-700 dark:text-slate-200">Ustuvorlik</Text>
      <View className="mb-6 flex-row gap-2">
        {priorities.map((p) => (
          <Chip
            key={p.key}
            label={p.label}
            selected={priority === p.key}
            onPress={() => setPriority(p.key)}
          />
        ))}
      </View>

      <Button label="Yo'lni hisoblash" icon="navigate" size="lg" />
    </Screen>
  );
}

function Field({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <View>
      <Text className="text-xs uppercase tracking-wide text-slate-400">{label}</Text>
      <Text
        className={`mt-1 text-base ${muted ? 'text-slate-400' : 'text-slate-900 dark:text-white'}`}>
        {value}
      </Text>
    </View>
  );
}
