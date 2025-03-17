import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../theme/theme';
import Tab2Screen from '../components/pages/tabs/Tab2Screen';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: colors.background,
          
        },
        tabBarIconStyle:{
          display:'none'
        },
        tabBarLabelStyle: {
          // marginBottom: 5,
          fontSize:20,
          marginTop:3
        },
        tabBarStyle:{
          height:45
        },
        headerStyle: {
          elevation: 0,
        },
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.secondary,
        headerShown:false
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ title: 'Inicio' }}
        component={HomeStackNavigator} 
      />
      <Tab.Screen
        name="Favorite"
        options={{ title: 'Favoritos',headerShown:true }}
        component={Tab2Screen}
      />
    </Tab.Navigator>
  );
};