import React from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconMa from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen from '../screens/DashboardScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingScreen from '../screens/SettingScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';


const stack = createStackNavigator();
const dashBoarkStack = createStackNavigator();
const hisotryStack = createStackNavigator();
const settingStack = createStackNavigator();

const tabStack = createBottomTabNavigator();

const TabScreen = () =>{
    return(
        <tabStack.Navigator>
            <tabStack.Screen 
                name="Dashboard" component={dashBoarkStackScreen}
                options={{ tabBarIcon:({color})=>(
                    <IconMa name='dashboard' size={24} color={color}/>
                )}}
            />
            <tabStack.Screen 
                name="History" component={hisotryStackScreen}
                options={{tabBarIcon:({color})=>(
                    <IconMa name='history' size={24} color={color}/>
                )}}
            />
            <tabStack.Screen
                name="Setting" component={settingStackScreen}
                options={{
                    tabBarIcon:({color})=>(
                    <IconMa name='settings' size={24} color={color}/>
                    )}
                }
            />
        </tabStack.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='TabScreen'>
                <stack.Screen name='TabScreen' component={TabScreen} options={{header:()=>null}}/>
                <stack.Screen name="Details" component={ItemDetailScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}


const dashBoarkStackScreen = () =>{
    return(
        <dashBoarkStack.Navigator screenOptions={{
            headerLeft:false,
            headerTitleAlign:'center'
            }}>
            <dashBoarkStack.Screen name="Home" component={DashboardScreen}/>
        </dashBoarkStack.Navigator>
    )
}

const hisotryStackScreen = () =>{
    return(
        <hisotryStack.Navigator screenOptions={{
            headerLeft:false,
            headerTitleAlign:'center'
            }}>
            <hisotryStack.Screen name="History" component={HistoryScreen}/>
        </hisotryStack.Navigator>
    )
}

const settingStackScreen = () =>{
    return(
        <settingStack.Navigator screenOptions={{
            headerLeft:false,
            headerTitleAlign:'center'
            }}>
            <settingStack.Screen name="Setting" component={SettingScreen}/>
        </settingStack.Navigator>
    )
}
