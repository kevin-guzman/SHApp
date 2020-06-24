import React, {Component} from 'react'
//import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import {createStackNavigator} from 'react-navigation-stack'

//Screens
import Add from './screens/Add'
import Login from './screens/Login'
import Rooms from './screens/Rooms'
//import Ajustes from './Components/Ajustes'
import SingUp from './screens/SingUp'



const HomeStack = createBottomTabNavigator(
        {
            Rooms: Rooms,
            Add:  Add,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    /* if (routeName === 'Login') {
                    iconName =  focused ? 'home' : 'home';
                    } else */ 
                    if (routeName === 'Add') {
                    iconName = focused ? 'library-add' : 'library-add';
                    } else if (routeName === 'Rooms'){
                    iconName = focused ? 'list' : 'list'; //list
                    } /* else if (routeName === 'Ajustes'){
                    iconName = focused ? 'settings' : 'settings';
                    } */
            
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Icon name={iconName} size={25} color={tintColor} />;//iconName  tintColor
                }
            }),
            tabBarOptions: {
                activeTintColor: 'purple',
                inactiveTintColor: 'gray',
                headerMode:'none'
            },
            
        }
);

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

/* export default createAppContainer(createBottomTabNavigator(

  {
    Inicio:Inicio,
    Habitaciones:AddStack,
    Ajustes:Ajustes
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Inicio') {
          iconName =  focused ? 'home' : 'home';
        } else if (routeName === 'Agregar') {
          iconName = focused ? 'library-add' : 'library-add';
        } else if (routeName === 'Habitaciones'){
          iconName = focused ? 'list' : 'list';
        } else if (routeName === 'Ajustes'){
          iconName = focused ? 'settings' : 'settings';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }

    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
      headerMode:'none'
    },
    
  },

  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
  }

)); */

