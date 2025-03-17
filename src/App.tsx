import '../gesture-handler';
import { View, Text } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './stores/store';
import { BottomTabNavigator } from './presentation/routes/BottomTabNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <BottomTabNavigator/>
        </NavigationContainer>
      </QueryClientProvider>  
    </Provider>
  )
}

export default App