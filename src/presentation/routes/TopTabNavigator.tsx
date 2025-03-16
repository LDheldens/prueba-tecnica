import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilmsScreen from '../screens/films/FilmsScreen';
import PlanetsScreen from '../screens/planets/PlanetsScreen';
import PeopleScreen from '../screens/people/PeopleScreen';
import { colors } from '../../theme/theme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.secondary, 
            tabBarIndicatorStyle: {
              height: 3,
              backgroundColor: colors.secondary, 
            },
            tabBarLabel: ({ focused, color, children }) => (
              <Text
                style={{
                  color: colors.primary, 
                  fontWeight: focused ? '900' : 'normal', 
                  fontSize: 14, 
                }}
              >
                {children}
              </Text>
            ),
          }}
        >
          <Tab.Screen
            name="Planets"
            options={{ title: 'Planetas' }}
            component={PlanetsScreen}
          />
          <Tab.Screen
            name="Films"
            options={{ title: 'Filmaciones' }}
            component={FilmsScreen}
          />
          <Tab.Screen
            name="Peoples"
            options={{ title: 'Personajes' }}
            component={PeopleScreen}
          />
        </Tab.Navigator>
      );
}
export default TopTabNavigator