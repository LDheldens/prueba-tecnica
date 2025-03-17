import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/pages/home/HomeScreen';
import PeopleScreen from '../components/pages/people/PeopleScreen';
import PersonDetailScreen from '../components/pages/people/PersonDetailScreen';
import FilmsScreen from '../components/pages/films/FilmsScreen';
import FilmScreen from '../components/pages/films/FilmScreen';
import PlanetsScreen from '../components/pages/planets/PlanetsScreen';
import PlanetScreen from '../components/pages/planets/PlanetScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export type RootStackParams = {
  Home:undefined,
  Planets:undefined,
  Planet:{
    url:string
  },
  Films:undefined,
  Film:{
    url:string
  },
  People:undefined,
  PersonDetail:{
    url:string
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