import { View, Text, StyleSheet } from 'react-native';

export default function TablesScreen() {
  return (
    <View style={styles.screen}>
      <Text>TablesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
