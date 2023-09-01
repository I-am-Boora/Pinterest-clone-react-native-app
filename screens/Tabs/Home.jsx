import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import PinScreen from '../PinScreen'
import PinDetailScreen from '../PinDetailScreen'



const Home = () => {
     const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='PinScreen'>
      <Stack.Screen name="PinScreen" component={PinScreen}   options ={{ headerShown:true,headerStyle: {
     

      },
      headerTitleAlign:'center',
      headerTitleStyle: {
        fontSize: 16,
        
      },
      title:'Browse'}} />
      <Stack.Screen name="PinDetailScreen" component={PinDetailScreen} options={{headerShown:false,title:'Pinscreen'}}/>
      
      
    </Stack.Navigator>
  )
}

export {Home}

const styles = StyleSheet.create({})