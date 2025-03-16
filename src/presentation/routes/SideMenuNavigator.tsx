import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import StackNavigator from './HomeStackNavigator';
import { golbalStyles,colors } from '../../theme/theme';
import { View,useWindowDimensions } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const SideMenuNavigator = ()=> {

    const dimensions = useWindowDimensions()

    return (
        <Drawer.Navigator 
            drawerContent={(props)=>(
                <CustomDrawerContent {...props}/>
            )}
            screenOptions={{
                headerShown:false,
                drawerType:dimensions.width > 500 ? 'permanent' : 'slide',
                drawerActiveBackgroundColor:colors.primary,
                drawerActiveTintColor:'#fff',
                drawerItemStyle:{
                    borderRadius:100,
                    paddingHorizontal:20
                }
            }}
        >
        <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
        </Drawer.Navigator>
    );
}
export default SideMenuNavigator

const CustomDrawerContent = (props:DrawerContentComponentProps) =>{

    return (
        <DrawerContentScrollView>
            <View style={{backgroundColor:colors.primary,margin:30,borderRadius:50,height:200}}>
                
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}