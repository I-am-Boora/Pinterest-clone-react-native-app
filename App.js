import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Home } from './screens/Tabs/Home';
import { Profile } from './screens/Tabs/Profile';
import SearchScreen from './screens/Tabs/SearchScreen';
import UploadScreen from './screens/Tabs/UploadScreen';
import UpdateScreen from './screens/Tabs/UpdateScreen';


const Tab = createBottomTabNavigator();


// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator initialRouteName='home' screenOptions={{ headerShown:false,tabBarStyle:{paddingHorizontal:50}}}>
      <Tab.Screen name="home" component={Home} options={{
        title:'Browse',
        tabBarIcon:({focused,size}) => <FontAwesome name="home" size={size} color={focused?'black':'grey'} />,
        tabBarShowLabel:false,
        
      }}/>
      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarIcon:({focused,size}) => <FontAwesome name="search" size={size} color={focused?'black':'grey'} />,
        tabBarShowLabel:false,
        
      }}/>
      <Tab.Screen name="upload" component={UploadScreen} options={{
        tabBarIcon:({focused,size}) => <FontAwesome name="plus" size={size} color={focused?'black':'grey'} />,
        tabBarShowLabel:false,
        
      }}/>
      <Tab.Screen name="update" component={UpdateScreen} options={{
        title:'update',
        headerShown:true,
        headerTitleAlign:'center',
        headerTitleStyle:{fontSize:18},
        tabBarIcon:({focused,size}) => <Ionicons name="chatbubble-ellipses-sharp" size={size} color={focused?'black':'grey'} />,
        tabBarShowLabel:false,
        
      }}/>
      <Tab.Screen name="profile" component={Profile}
      options={{
        tabBarIcon:({focused,size}) => <FontAwesome name="user" size={size} color={focused?'black':'grey'} />,
        tabBarShowLabel:false,
        
      }}
      />
    </Tab.Navigator>
    
    
  
    </NavigationContainer>
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
