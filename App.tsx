import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import BottomTab from "./Screens/BottomTabs";


import { useNavigation } from '@react-navigation/native';
import Login from "./Screens/LoginScreen";
import Signup from "./Screens/SignUpScreen";




const {Navigator, Screen} =   createNativeStackNavigator();

const App = ()=>{
    return(
        
    <NavigationContainer >
        <Navigator  initialRouteName="Login">
            {/* <Screen name="Getting Started" options={{headerShown: false}}component={GetStarted}/>
            <Screen name="Signup" options={{headerShown: false}}component={Signup} /> */}
            <Screen name="Login" options={{headerShown: false}}component={Login} />
            <Screen name="Signup" options={{headerShown: false}}component={Signup} />
            <Screen name= "Home" options={{headerShown: false}} component={BottomTab}/>
            {/* <Screen name= "ChatScreen" options={{headerShown: true}} component={ChatScreen}/> */}
            {/* <BottomTab/> */}
        </Navigator>
       
    </NavigationContainer>
    
    
    )
    
}
// options={{header: ()=> <Text>Hello</Text>}}

export default App;