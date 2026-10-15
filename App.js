import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TablesScreen from './screens/TablesScreen';
import InfoScreen from './screens/InfoScreen';
import LeagueScreen from './screens/LeagueScreen';

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
      <Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tables" component={TablesScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="League" component={LeagueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
