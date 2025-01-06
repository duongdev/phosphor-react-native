/* eslint-disable react-native/no-inline-styles */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as IconPack from @mrkpatchaa/phosphor-react-native';
import PhosphorLogo from './phosphor-mark-tight-yellow.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { IconContext, ...Icons } = IconPack;

const weights = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

export default function App() {
  const [weightIdx, setWeightIdx] = React.useState(2);
  const [mirrorActive, setMirrorActive] = React.useState(false);

  const weight: IconPack.IconWeight = React.useMemo(
    () => weights[weightIdx] as any,
    [weightIdx]
  );

  const handleChangeWeight = React.useCallback(() => {
    setWeightIdx((weightIdx + 1) % weights.length);
  }, [weightIdx]);

  const handleToggleMirror = React.useCallback(() => {
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
              alignItems: 'center',
              justifyContent: 'center',
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
            onPress={handleChangeWeight}
          >
            <IconPack.PencilLine color="#FFF" weight={weight} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.weightSelect}
            onPress={handleToggleMirror}
          >
            <IconPack.Swap color="#FFF" weight={weight} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.main}
        data={Object.entries(Icons).filter(([, Icon]) => !!Icon) as any[]}
        keyExtractor={(item) => item[0]}
        numColumns={3}
        renderItem={({ item: [name, Icon] }) => (
          <View style={styles.iconItem}>
            <Icon size={48} weight={weight} mirrored={mirrorActive} />
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
    width: 40,
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
