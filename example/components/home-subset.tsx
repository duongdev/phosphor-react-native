/* eslint-disable react-native/no-inline-styles */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useCallback, useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconWeight, Icon } from '@mrkpatchaa/phosphor-react-native';
import { Camera } from 'lucide-react-native';

import PhosphorLogo from '@/assets/images/phosphor-mark-tight-yellow.png';

const weights = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];
const iconList = ['Acorn'];

export default function HomeScreen() {
  const [weightIdx, setWeightIdx] = useState(2);
  const [iconColor, setIconColor] = useState(undefined);
  const [mirrorActive, setMirrorActive] = useState(false);

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

  const handleToggleMirror = useCallback(() => {
    setMirrorActive(!mirrorActive);
  }, [mirrorActive]);

  return (
    <View style={styles.rootView}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.headerContainer}>
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
            <Icon name="Palette" color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.weightSelect}
            onPress={handleChangeWeight}
          >
            <Icon name="PencilLine" color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.weightSelect}
            onPress={handleToggleMirror}
          >
            <Icon name="Swap" color="#FFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.main}
        data={iconList}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item: name }) => (
          <View style={styles.iconItem}>
            <Icon
              name={name}
              size={48}
              weight={weight}
              mirrored={mirrorActive}
              color={iconColor}
            />
            <Camera />
            <Text style={styles.iconName}>{name}</Text>
          </View>
        )}
      />
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
    paddingTop: 10,
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
