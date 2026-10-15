import { View, StyleSheet } from 'react-native';
import { LEAGUES } from '../data/leagues';
import LeagueCard from '../components/LeagueCard';

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.list}>
      {LEAGUES.map((league) => (
        <LeagueCard
          key={league.id}
          league={league}
          action="→"
          onPress={() => navigation.navigate('League', { id: league.id })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { padding: 24, width: '100%', maxWidth: 640, alignSelf: 'center' },
});
