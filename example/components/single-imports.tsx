import { useCallback, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhosphorLogo from '@/assets/images/phosphor-mark-tight-yellow.png';
import { SwapIcon } from '@/components/icons/icons/Swap';
import { AcornIcon } from '@/components/icons/icons/Acorn';
import { PaletteIcon } from '@/components/icons/icons/Palette';
const weights = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

const singleIcons = [AcornIcon, PaletteIcon, SwapIcon];
export default function SingleImportsScreen() {
  const [toggleActive, setToggleActive] = useState(false);

  const handleToggle = useCallback(() => {
    setToggleActive(!toggleActive);
  }, [toggleActive]);
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
              Single imports
            </Text>
          </View>
          <TouchableOpacity style={styles.weightSelect} onPress={handleToggle}>
            <SwapIcon color="#FFF" weight={'regular'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.main}
        data={singleIcons}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item: Icon }) => (
          <View style={styles.iconItem}>
            <Icon
              size={48}
              weight={weights[Math.floor(Math.random() * 6)]}
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              duotoneColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              duotoneOpacity={Math.random()}
            />
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
