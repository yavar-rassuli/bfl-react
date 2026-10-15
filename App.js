import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TablesScreen from './screens/TablesScreen';
import InfoScreen from './screens/InfoScreen';
import LeagueScreen from './screens/LeagueScreen';
import { COLORS } from './theme';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: '',
      Tables: 'tables',
      Info: 'info',
      League: 'league/:id',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.pitch },
          headerTintColor: COLORS.chalk,
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: COLORS.chalk },
        }}
      >

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tables" component={TablesScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="League" component={LeagueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
