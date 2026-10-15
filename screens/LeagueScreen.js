import { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Linking, ScrollView } from 'react-native';
import { LEAGUES } from '../data/leagues';
import { COLORS, MONO } from '../theme';

export default function LeagueScreen({ route, navigation }) {
  const { id } = route.params;
  const league = LEAGUES.find((l) => l.id === id);
  const years = new Date().getFullYear() - league.founded;

  useEffect(() => {
    navigation.setOptions({ title: league.name });
  }, [league]);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.board}>
        <Text style={styles.code}>{league.code}</Text>
        <Text style={styles.name}>{league.name}</Text>
        <Text style={styles.country}>{league.country}</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{league.founded}</Text>
          <Text style={styles.statLabel}>FOUNDED</Text>
        </View>
        <View style={[styles.stat, styles.statMiddle]}>
          <Text style={styles.statValue}>{league.teams}</Text>
          <Text style={styles.statLabel}>TEAMS</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{years}</Text>
          <Text style={styles.statLabel}>YEARS</Text>
        </View>
      </View>

      <Text style={styles.description}>{league.description}</Text>

      <Pressable style={styles.button} onPress={() => Linking.openURL(league.tableUrl)}>
        <Text style={styles.buttonText}>View current table ↗</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 24, width: '100%', maxWidth: 640, alignSelf: 'center' },

  board: {
    backgroundColor: COLORS.pitchDark,
    borderRadius: 12,
    paddingVertical: 28,
    alignItems: 'center',
  },
  code: { fontFamily: MONO, fontSize: 44, fontWeight: '700', color: COLORS.chalk, letterSpacing: 8 },
  name: { fontSize: 22, fontWeight: '800', color: COLORS.chalk, marginTop: 6 },
  country: {
    fontFamily: MONO,
    fontSize: 12,
    color: COLORS.chalk,
    opacity: 0.7,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 4,
  },

  stats: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 12,
  },
  stat: { flex: 1, alignItems: 'center', paddingVertical: 16 },
  statMiddle: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: COLORS.line },
  statValue: { fontFamily: MONO, fontSize: 26, fontWeight: '700', color: COLORS.ink },
  statLabel: { fontFamily: MONO, fontSize: 11, color: COLORS.muted, letterSpacing: 2, marginTop: 4 },

  description: { fontSize: 16, lineHeight: 24, color: COLORS.ink, marginTop: 24 },
git add . && git commit -m "Remove old code and rename app"

  button: {
    backgroundColor: COLORS.pitch,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: { color: COLORS.chalk, fontWeight: '800', fontSize: 15 },
});
