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
import * as IconPack from '@/components/icons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { IconContext, ...Icons } = IconPack;

export default function TestLabScreen() {
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
              Duotone test lab
            </Text>
          </View>
          <TouchableOpacity style={styles.weightSelect} onPress={handleToggle}>
            <IconPack.Swap color="#FFF" weight={'regular'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.main}
        data={Object.entries(Icons)
          .filter(([, Icon]) => !!Icon)
          .slice(0, 6)}
        keyExtractor={(item) => item[0]}
        numColumns={3}
        renderItem={({ item: [name, Icon] }) => (
          <View style={styles.iconItem}>
            <Icon
              size={48}
              weight={'duotone'}
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              duotoneColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              duotoneOpacity={Math.random()}
            />
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
