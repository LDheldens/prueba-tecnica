import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import PeopleScreen from '../screens/people/PeopleScreen';
import PersonDetailScreen from '../screens/people/PersonDetailScreen';
import FilmsScreen from '../screens/films/FilmsScreen';
import FilmScreen from '../screens/films/FilmScreen';
import PlanetsScreen from '../screens/planets/PlanetsScreen';
import PlanetScreen from '../screens/planets/PlanetScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export type RootStackParams = {
  Home:undefined,
  Planets:undefined,
  Planet:{
    id:number
  },
  Films:undefined,
  Film:{
    id:number
  },
  People:undefined,
  PersonDetail:{
    id:number
  },
}

const Stack = createStackNavigator<RootStackParams>();

const HomeStackNavigator = () => {
  const navigation = useNavigation()
  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        elevation:0
      }
    }}>
      <Stack.Screen name="Home" options={{
        headerShown:true,
        title:'Inicio'
      }} component={HomeScreen} />
      <Stack.Screen name='Planets' component={PlanetsScreen}/>
      <Stack.Screen name="Planet" component={PlanetScreen} />
      <Stack.Screen name="Films" component={FilmsScreen} />
      <Stack.Screen name="Film" component={FilmScreen} />
      <Stack.Screen name="People" component={PeopleScreen} />
      <Stack.Screen name="PersonDetail" component={PersonDetailScreen} />
    </Stack.Navigator>
  );
}
export default HomeStackNavigator