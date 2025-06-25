import { Tabs } from 'expo-router';
import React from 'react';

import { ListIcon, TestTubeIcon } from '@/components/icons';
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
            <ListIcon weight={focused ? 'fill' : 'light'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="test-lab"
        options={{
          title: 'Test Lab',
          tabBarIcon: ({ color, focused }) => (
            <TestTubeIcon weight={focused ? 'fill' : 'light'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="single-imports"
        options={{
          title: 'Single',
          tabBarIcon: ({ color, focused }) => (
            <TestTubeIcon weight={focused ? 'fill' : 'light'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
