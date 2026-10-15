import { View, StyleSheet, Linking } from 'react-native';
import { LEAGUES } from '../data/leagues';
import LeagueCard from '../components/LeagueCard';

export default function TablesScreen() {
  return (
    <View style={styles.list}>
      {LEAGUES.map((league) => (
        <LeagueCard
          key={league.id}
          league={league}
          action="TABLE ↗"
          onPress={() => Linking.openURL(league.tableUrl)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { padding: 24, width: '100%', maxWidth: 640, alignSelf: 'center' },
});
