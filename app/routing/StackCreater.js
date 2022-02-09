import * as React from 'react';
import {createStackNavigator,CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs} from '@react-navigation/stack';
 

const Stack = createStackNavigator();

export default function StackCreater(props) {
    const{routs, screenOptions } =props 
  return (
    <Stack.Navigator 
    screenOptions={{headerShown: false,
     cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,  
     ...screenOptions
     }}
  
     >
      {routs?.map((item, key) => {
        const {name, component,} = item;
        return <Stack.Screen
         key={key}  
         name={name} 
         component={component} />;
      })}
    </Stack.Navigator>
  );
}
