import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import * as IconPack from 'phosphor-react-native';
const PhosphorLogo = require('./phosphor-mark-tight-yellow.png');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { IconContext, ...Icons } = IconPack;

export default function App() {
  console.log(Icons);
  return (
    <View style={styles.rootView}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={PhosphorLogo} style={styles.logoImage} />
          <Text style={styles.headerText}>Phosphor React Native</Text>
          <View style={styles.weightSelect}>
            <IconPack.Airplane color="#FFF" />
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          {Object.entries(Icons)
            .filter(([, Icon]) => !!Icon)
            .map(([name, Icon]) => (
              <View key={name} style={styles.iconItem}>
                <Icon size={40} />
                <Text style={styles.iconName}>{name}</Text>
              </View>
            ))}
        </View>
      </ScrollView>
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
  scrollView: {},
  main: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
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
