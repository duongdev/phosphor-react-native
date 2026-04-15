import { useCallback, useRef, useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhosphorLogo from '@/assets/images/phosphor-mark-tight-yellow.png';

// ─── Multi-weight import (loads all 6 weight variants) ───────────────────────
import { AcornIcon } from '@/components/icons/icons/Acorn';
import { PaletteIcon } from '@/components/icons/icons/Palette';
import { SwapIcon } from '@/components/icons/icons/Swap';

// ─── Per-weight imports (loads only the needed weight) ───────────────────────
// Equivalent to: import { AcornIcon } from 'phosphor-react-native/regular'
import { AcornIcon as AcornRegular } from '@/components/icons/regular/icons/Acorn';
import { PaletteIcon as PaletteRegular } from '@/components/icons/regular/icons/Palette';
import { SwapIcon as SwapRegular } from '@/components/icons/regular/icons/Swap';

// ─── Per-weight bold import ───────────────────────────────────────────────────
// Equivalent to: import { AcornIcon } from 'phosphor-react-native/bold'
import { AcornIcon as AcornBold } from '@/components/icons/bold/icons/Acorn';
import { PaletteIcon as PaletteBold } from '@/components/icons/bold/icons/Palette';
import { SwapIcon as SwapBold } from '@/components/icons/bold/icons/Swap';

/**
 * Counts how many times this component rendered. Using a ref (not state)
 * so the count itself doesn't trigger another render.
 */
function RenderCounter({ label }: { label: string }) {
  const count = useRef(0);
  count.current += 1;
  return (
    <Text style={styles.renderCount}>
      {label}: {count.current} render{count.current === 1 ? '' : 's'}
    </Text>
  );
}

export default function SingleImportsScreen() {
  const [parentCount, setParentCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setParentCount((c) => c + 1);
  }, []);

  return (
    <View style={styles.rootView}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={PhosphorLogo} style={styles.logoImage} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Performance Demos</Text>
            <Text style={styles.headerSubtext}>Single imports + React.memo</Text>
          </View>
          <TouchableOpacity style={styles.weightSelect} onPress={handleIncrement}>
            <SwapIcon color="#FFF" weight="regular" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.main}>
        {/* ── Section 1: React.memo demo ─────────────────────────────────── */}
        <Text style={styles.sectionTitle}>React.memo — stable props = zero re-renders</Text>
        <Text style={styles.sectionDesc}>
          Tap the swap button to increment parent render count. Icons with unchanged
          props are protected by React.memo and skip re-rendering.
        </Text>
        <Text style={styles.parentCount}>Parent renders: {parentCount}</Text>

        <View style={styles.iconRow}>
          {/* These icons have STABLE props — memo will block re-renders */}
          <View style={styles.iconItem}>
            <AcornIcon size={48} weight="regular" color="#e76f51" />
            <RenderCounter label="Acorn" />
          </View>
          <View style={styles.iconItem}>
            <PaletteIcon size={48} weight="bold" color="#2a9d8f" />
            <RenderCounter label="Palette" />
          </View>
          <View style={styles.iconItem}>
            <SwapIcon size={48} weight="duotone" color="#264653" duotoneColor="#e9c46a" />
            <RenderCounter label="Swap" />
          </View>
        </View>

        {/* ── Section 2: Per-weight subpath imports ─────────────────────── */}
        <Text style={styles.sectionTitle}>Per-weight subpath imports</Text>
        <Text style={styles.sectionDesc}>
          Import only the weight you need. Bundlers tree-shake other weights
          entirely — no Map, no switch, no dead code.
        </Text>

        <Text style={styles.weightLabel}>
          {'import { AcornIcon } from "phosphor-react-native/regular"'}
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <AcornRegular size={48} color="#e76f51" />
            <Text style={styles.iconName}>Acorn</Text>
          </View>
          <View style={styles.iconItem}>
            <PaletteRegular size={48} color="#2a9d8f" />
            <Text style={styles.iconName}>Palette</Text>
          </View>
          <View style={styles.iconItem}>
            <SwapRegular size={48} color="#264653" />
            <Text style={styles.iconName}>Swap</Text>
          </View>
        </View>

        <Text style={styles.weightLabel}>
          {'import { AcornIcon } from "phosphor-react-native/bold"'}
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconItem}>
            <AcornBold size={48} color="#e76f51" />
            <Text style={styles.iconName}>Acorn</Text>
          </View>
          <View style={styles.iconItem}>
            <PaletteBold size={48} color="#2a9d8f" />
            <Text style={styles.iconName}>Palette</Text>
          </View>
          <View style={styles.iconItem}>
            <SwapBold size={48} color="#264653" />
            <Text style={styles.iconName}>Swap</Text>
          </View>
        </View>

        {/* ── Section 3: Multi-weight import (classic API) ───────────────── */}
        <Text style={styles.sectionTitle}>Multi-weight import (classic API)</Text>
        <Text style={styles.sectionDesc}>
          Standard import — supports all 6 weights via the weight prop.
          Includes the full Map of all variants.
        </Text>
        <Text style={styles.weightLabel}>
          {'import { AcornIcon } from "phosphor-react-native"'}
        </Text>
        <View style={styles.iconRow}>
          {(['thin', 'light', 'regular', 'bold', 'fill', 'duotone'] as const).map((w) => (
            <View style={styles.iconItem} key={w}>
              <AcornIcon size={36} weight={w} color="#e76f51" />
              <Text style={styles.iconName}>{w}</Text>
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
  headerTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingStart: 10,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtext: {
    color: '#fff',
    opacity: 0.8,
  },
  weightSelect: {
    width: 35,
  },
  scrollView: {
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 4,
    color: '#264653',
  },
  sectionDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
    lineHeight: 18,
  },
  parentCount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e76f51',
    marginBottom: 8,
  },
  renderCount: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },
  weightLabel: {
    fontFamily: 'monospace',
    fontSize: 11,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#264653',
    marginBottom: 8,
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconItem: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  iconName: {
    fontSize: 11,
    textAlign: 'center',
    opacity: 0.7,
    marginTop: 4,
  },
});

