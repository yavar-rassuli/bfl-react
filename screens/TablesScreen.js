import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import { LEAGUES } from '../data/leagues';

export default function TablesScreen() {
  return (
    <View style={styles.screen}>
      {LEAGUES.map((league) => (
        <Pressable key={league.id} onPress={() => Linking.openURL(league.tableUrl)}>
          <Text>{league.name} table ↗</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
