import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Welcome from '../screens/Login/Welcome';
 
export const RoutesList = [
  
  {
    name: 'Home',
    component: Home,
    options: {  
      tabBarLabel: 'Home',
      tabBarIcon: (props) => <FontAwesome name={"home"} size={20} color={props.color}  />,
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {  
      tabBarLabel: 'Account',
      tabBarIcon: (props) => <FontAwesome name={"user-circle"} size={20} color={props.color}  />, 
    },
  },
];


export const LoginRoutes= [
  {
    name: 'Welcome',
    component: Welcome,
  },
  {
    name: 'Login',
    component: Login,
  },
]