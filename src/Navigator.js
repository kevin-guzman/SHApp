import React, {Component} from 'react'
//import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import {createStackNavigator} from 'react-navigation-stack'
import { Button, View, IconButton } from 'react-native-paper'
//import { mdiWindowOpenVariant } from '@mdi/font';

//Screens
import Add from './screens/Add'
import Login from './screens/Login'
import Rooms from './screens/Rooms'
import Windows from './screens/Windows'
import SingUp from './screens/SingUp'
//import { View } from 'react-native';



const HabitacionesStack = createStackNavigator(
  {
    Rooms: Rooms,
    Add : Add
  },
  {
    initialRouteName: 'Rooms',
    headerMode:'none',
  }
);

const HomeStack = createBottomTabNavigator(
        {
            Rooms: HabitacionesStack,
            Windows: Windows
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Windows' ) {
                    iconName = focused ? 'format-list-bulleted' : 'window-open-variant';//monitor
                    } else if (routeName === 'Rooms'){
                    iconName = focused ? 'format-list-bulleted' : 'lightbulb-on'; //list
                    }
            
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <IconButton icon={iconName} color={tintColor} /> ; {/* <Icon name={iconName} size={25} color={tintColor} /> */};//iconName  tintColor
                }
            }),
            tabBarOptions: {
                activeTintColor: 'purple',
                inactiveTintColor: 'gray',
                //headerMode:'none'
            },
            
        }
);
//
const LoginStack = createStackNavigator(
    {
        Login: Login,
        SingUp:  SingUp,
    },
    {
        headerMode:'none',
        initialRouteName: 'Login'
    },
    
);

export default createAppContainer(
    createSwitchNavigator(
        {
            User: LoginStack,
            Home: HomeStack,
        },
        {
            initialRouteName: 'Home' , //'User'
        }
    )
)


