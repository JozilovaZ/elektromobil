import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import { useColorScheme } from 'react-native';

import colors from '@/theme/colors';

type IconName = ComponentProps<typeof Ionicons>['name'];

const tabs: { name: string; title: string; icon: IconName; iconActive: IconName }[] = [
  { name: 'index', title: 'Xarita', icon: 'map-outline', iconActive: 'map' },
  { name: 'stations', title: 'Stansiyalar', icon: 'flash-outline', iconActive: 'flash' },
  { name: 'planner', title: "Yo'l", icon: 'navigate-outline', iconActive: 'navigate' },
  { name: 'profile', title: 'Profil', icon: 'car-sport-outline', iconActive: 'car-sport' },
];

export default function TabsLayout() {
  const dark = useColorScheme() === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.brand[500],
        tabBarInactiveTintColor: dark ? '#64748B' : '#94A3B8',
        tabBarStyle: {
          backgroundColor: dark ? colors.surface.cardDark : colors.surface.card,
          borderTopColor: dark ? '#1E293B' : '#E2E8F0',
          height: 64,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}>
      {tabs.map((t) => (
        <Tabs.Screen
          key={t.name}
          name={t.name}
          options={{
            title: t.title,
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons name={focused ? t.iconActive : t.icon} color={color as string} size={size} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
