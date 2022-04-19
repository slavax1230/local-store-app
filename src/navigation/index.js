import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'



import DashboardScreen from '../screens/dashboard';
import StoresScreen from '../screens/stores';
import CartScreen from '../screens/cart';
import MenuScreen from '../screens/menu';


const DashboardStackNavigation = createStackNavigator();
const StoresStackNavigation = createStackNavigator();
const CartStackNavigation = createStackNavigator();
const MenuStackNavigation = createStackNavigator();
const TabsBottomNavigation = createMaterialBottomTabNavigator();


export const DashboardStack = () => {
    return(
        <DashboardStackNavigation.Navigator>
            <DashboardStackNavigation.Screen name='Dashboard' component={DashboardScreen} />
        </DashboardStackNavigation.Navigator>
    )
}

export const CartStack = () => {
    return(
        <CartStackNavigation.Navigator>
            <CartStackNavigation.Screen name='Cart' component={CartScreen} />
        </CartStackNavigation.Navigator>
    )
}

export const StoresStack = () => {
    return(
        <StoresStackNavigation.Navigator>
            <StoresStackNavigation.Screen name='Stores' component={StoresScreen} />
        </StoresStackNavigation.Navigator>
    )
}

export const MenuStack = () => {
    return(
        <MenuStackNavigation.Navigator>
            <MenuStackNavigation.Screen name='Menu' component={MenuScreen} />
        </MenuStackNavigation.Navigator>
    )
}

export const BottomTabs = () => {
    return(
        <TabsBottomNavigation.Navigator>
            <TabsBottomNavigation.Screen name='DashBoardStack' component={DashboardStack}
            options={{tabBarLabel: 'Dashboard',tabBarIcon: ({ color}) => (<MaterialCommunityIcons name= 'view-dashboard' color={color} size={32}  />)}}
            />
            <TabsBottomNavigation.Screen name='StoresStack' component={StoresStack} 
            options={{tabBarLabel: 'Stores',tabBarIcon: ({ color}) => (<MaterialCommunityIcons name= 'store' color={color} size={32}  />)}}
            />
            <TabsBottomNavigation.Screen name='CartStack' component={CartStack}
            options={{tabBarLabel: 'Cart',tabBarIcon: ({ color}) => (<MaterialIcons name= 'shopping-cart' color={color} size={32}  />)}}
            />
             <TabsBottomNavigation.Screen name='MenuStack' component={MenuStack}
            options={{tabBarLabel: 'Menu',tabBarIcon: ({ color}) => (<SimpleLineIcons name= 'menu' color={color} size={32}  />)}}
            />
        </TabsBottomNavigation.Navigator>
    )
}