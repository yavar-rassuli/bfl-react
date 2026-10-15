import { View, Text, StyleSheet } from 'react-native';
import { LEAGUES } from '../data/leagues';

export default function LeagueScreen({ route }) {
  const { id } = route.params;
  const league = LEAGUES.find((l) => l.id === id);

  return (
    <View style={styles.screen}>
      <Text>{league.name}</Text>
      <Text>{league.country} · Founded {league.founded} · {league.teams} teams</Text>
      <Text>{league.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24 },
});
