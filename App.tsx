import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import BottomTab from "./Screens/BottomTabs";


import { useNavigation } from '@react-navigation/native';
import Login from "./Screens/LoginScreenStu";
import Signup from "./Screens/SignUpScreenStu";
import AppointmentScreen from "./Screens/AppointmentScreen";
import StudentStaffLogin from "./Screens/StudentStaffLogin";
import SignUpScreenSta from "./Screens/SignUpScreenSta";
import LoginScreenSta from "./Screens/LoginScreenSta";
import StudentStaffSignup from "./Screens/StudentStaffSignup";




const {Navigator, Screen} =   createNativeStackNavigator();

const App = ()=>{
    return(
        
    <NavigationContainer >
        <Navigator  initialRouteName="StudentStaff">
            {/* <Screen name="Getting Started" options={{headerShown: false}}component={GetStarted}/>
            <Screen name="Signup" options={{headerShown: false}}component={Signup} /> */}
            <Screen name="StudentStaff" options={{headerShown: false}}component={StudentStaffLogin} />
            <Screen name="StudentStaffSignUp" options={{headerShown: false}}component={StudentStaffSignup} />
            <Screen name="LoginStu" options={{headerShown: false}}component={Login} />
            <Screen name="LoginSta" options={{headerShown: false}}component={LoginScreenSta} />
            <Screen name="SignupStu" options={{headerShown: false}}component={Signup} />
            <Screen name="SignupSta" options={{headerShown: false}}component={SignUpScreenSta} />
            <Screen name= "Home" options={{headerShown: false}} component={BottomTab}/>
            <Screen name= "AppointmentScreen" options={{headerShown: true}} component={AppointmentScreen}/>
            {/* <Screen name= "ChatScreen" options={{headerShown: true}} component={ChatScreen}/> */}
            {/* <BottomTab/> */}
        </Navigator>
       
    </NavigationContainer>
    
    
    )
    
}
// options={{header: ()=> <Text>Hello</Text>}}

export default App;