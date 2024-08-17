import { Tabs } from 'expo-router';
import React from 'react';

import List from '@/components/icons/icons/List';
import TestTube from '@/components/icons/icons/TestTube';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'All icons',
          tabBarIcon: ({ color, focused }) => (
            <List weight={focused ? 'fill' : 'light'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="test-lab"
        options={{
          title: 'Test Lab',
          tabBarIcon: ({ color, focused }) => (
            <TestTube weight={focused ? 'fill' : 'light'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
