import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Pressable onPress={() => navigation.navigate('Tables')}>
        <Text>Show tables</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Info')}>
        <Text>League info</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
