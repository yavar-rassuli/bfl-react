import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS, MONO } from '../theme';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <View style={styles.hero}>
                <View style={styles.circle} />
                <View style={styles.heroContent}>
                    <Text style={styles.title}>BFL</Text>
                    <Text style={styles.subtitle}>Best Football Leagues</Text>
                </View>
            </View>

            <View style={styles.menu}>
                <Pressable style={styles.card} onPress={() => navigation.navigate('Tables')}>
                    <Text style={styles.cardNumber}>01</Text>
                    <View style={styles.cardText}>
                        <Text style={styles.cardTitle}>Tables</Text>
                        <Text style={styles.cardSubtitle}>Official standings of every league</Text>
                    </View>
                    <Text style={styles.arrow}>→</Text>
                </Pressable>

                <Pressable style={styles.card} onPress={() => navigation.navigate('Info')}>
                    <Text style={styles.cardNumber}>02</Text>
                    <View style={styles.cardText}>
                        <Text style={styles.cardTitle}>League info</Text>
                        <Text style={styles.cardSubtitle}>History and facts</Text>
                    </View>
                    <Text style={styles.arrow}>→</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: COLORS.chalk },

    hero: {
        backgroundColor: COLORS.pitch,
        paddingTop: 72,
        paddingBottom: 40,
        paddingHorizontal: 24,
        overflow: 'hidden',
    },
    circle: {
        position: 'absolute',
        right: -60,
        top: 20,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'rgba(245, 243, 236, 0.25)',
    },
    title: { fontSize: 64, fontWeight: '900', color: COLORS.chalk, letterSpacing: -2 },
    subtitle: {
        fontFamily: MONO,
        fontSize: 13,
        color: COLORS.chalk,
        opacity: 0.8,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },

    heroContent: { width: '100%', maxWidth: 592, alignSelf: 'center' },

    menu: { padding: 24, width: '100%', maxWidth: 640, alignSelf: 'center' },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.line,
        borderRadius: 12,
        padding: 18,
        marginBottom: 14,
    },
    cardNumber: { fontFamily: MONO, fontSize: 14, fontWeight: '700', color: COLORS.pitch, marginRight: 16 },
    cardText: { flex: 1 },
    cardTitle: { fontSize: 18, fontWeight: '800', color: COLORS.ink },
    cardSubtitle: { fontSize: 13, color: COLORS.muted, marginTop: 2 },
    arrow: { fontSize: 20, color: COLORS.pitch },
});
