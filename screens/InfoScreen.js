import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LEAGUES } from '../data/leagues';

export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      {LEAGUES.map((league) => (
        <Pressable
          key={league.id}
          onPress={() => navigation.navigate('League', { id: league.id })}
        >
          <Text>{league.name}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
