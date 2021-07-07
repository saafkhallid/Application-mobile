import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Admin from './src/Admin'
import User from './src/User'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

 
const Drawer = createDrawerNavigator();



function App(){
  return(
   <NavigationContainer>
   <Drawer.Navigator
   initialRouteName= 'Admin'
   drawerPosition='left'
   drawerType='front'
   edgeWidth={100}
   hideStatusBar={false}
   overlayColor='#ffffff'
   drawerStyle={{
     backgroundColor:'#A9E2F3',
     with:250
   }}
   screenOptions={{
     headerShown:true, 
     swipeEnabled:true,
     gestureEnabled :true,
     headerTitleAlign:'center',
     headerStyle:{
       backgroundColor:'#58ACFA'
     } ,
     headerTintColor:'#ffffff',
     headerTitleStyle:{
       fontSize:25,
       fontWeight:'bold'
     } 
   }}
   >
     <Drawer.Screen 
     name="Admin"
     component = {Admin}
     options={{
       title:'Admin',
       drawerIcon:({focused}) =>(
        <FontAwesome5
        name='user-lock'
        size={focused ? 25 : 20}
        color = {focused ? '#0040FF' : '#642EFE'}
        />
      )
    }}
     
    
     />
     <Drawer.Screen 
     name="User"
     component = {User}
     options={{
       title:'User',
       drawerIcon:({focused}) =>(
         <FontAwesome5
         name='users-cog'
         size={focused ? 25 : 20}
         color = {focused ? '#0040FF' : '#642EFE'}
         />
       )
     }}
     />
  
  </Drawer.Navigator>

   </NavigationContainer>
  )
}
 

export default App