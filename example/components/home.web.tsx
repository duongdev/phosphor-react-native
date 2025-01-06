/* eslint-disable react-native/no-inline-styles */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useCallback, useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Palette, PencilLine, Swap } from '@/components/icons';
import PhosphorLogo from '@/assets/images/phosphor-mark-tight-yellow.png';

const weights = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

export default function HomeScreen() {
  const [weightIdx, setWeightIdx] = useState(2);

  const weight: IconWeight = useMemo(
    () => weights[weightIdx] as any,
    [weightIdx]
  );

  const handleChangeWeight = useCallback(() => {
    setWeightIdx((weightIdx + 1) % weights.length);
  }, [weightIdx]);

  const handleChangeIconColor = useCallback(() => {
    setIconColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, []);

  return (
    <View style={styles.rootView}>
      <StatusBar barStyle="light-content" />

      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={PhosphorLogo} style={styles.logoImage} />
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingStart: 10,
            }}
          >
            <Text style={styles.headerText}>Phosphor React Native</Text>
            <Text
              style={{
                color: '#fff',
                opacity: 0.8,
                textTransform: 'capitalize',
              }}
            >
              {weight}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.weightSelect}
            onPress={handleChangeIconColor}
          >
            <Palette color="#FFF" weight={weight} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.weightSelect}
            onPress={handleChangeWeight}
          >
            <PencilLine color="#FFF" weight={weight} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.weightSelect}>
            <Swap color="#FFF" weight={weight} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    backgroundColor: '#e76f51',
  },
  header: {
    backgroundColor: '#e76f51',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  logoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  weightSelect: {
    width: 35,
  },
  scrollView: {
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  iconItem: {
    width: '33%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  iconName: {
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 4,
  },
});
