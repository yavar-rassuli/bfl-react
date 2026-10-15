import { Pressable, View, Text, StyleSheet } from 'react-native';
import { COLORS, MONO } from '../theme';

export default function LeagueCard({ league, action, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.code}>
        <Text style={styles.codeText}>{league.code}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>{league.name}</Text>
        <Text style={styles.meta}>{league.country} · {league.teams} teams</Text>
      </View>
      <Text style={styles.action}>{action}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 12,
    marginBottom: 14,
    overflow: 'hidden',
  },
  code: {
    width: 72,
    alignSelf: 'stretch',
    backgroundColor: COLORS.pitchDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeText: { fontFamily: MONO, fontSize: 18, fontWeight: '700', color: COLORS.chalk, letterSpacing: 2 },
  body: { flex: 1, paddingVertical: 18, paddingHorizontal: 16 },
  name: { fontSize: 18, fontWeight: '800', color: COLORS.ink },
  meta: { fontSize: 13, color: COLORS.muted, marginTop: 2 },
  action: { fontFamily: MONO, fontSize: 13, fontWeight: '700', color: COLORS.pitch, paddingRight: 18 },
});
