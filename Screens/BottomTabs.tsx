import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import AppointmentScreen from "./AppointmentScreen";

import AppointmentList from "./AppointmentList";


import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Image } from "react-native-svg";



const SettingsTab = () => {
  return (
    <Text></Text>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <BottomTab.Navigator screenOptions={{
        tabBarStyle: { paddingTop: 10, height:75,backgroundColor:'#38B6FD', borderTopRightRadius: 20, borderTopLeftRadius: 20,},
      }}>
      <BottomTab.Screen
        name='ScreenOne'
        component={HomeScreen}
        options={{headerShown: false,
          tabBarIcon: ({ focused }) =>
           <Ionicons name={focused? "home-sharp": 'home-outline'} size={30} color={'black'}/>,
         
           title: "",
        }}
      />
      <BottomTab.Screen
        name='ScreenTwo'
        component={AppointmentList}
        options={{headerShown: false,
           
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? "time-sharp" : 'time-outline'} size={30} color={'black'} />
          ),
          title: "",//hi
        }}
      />
      <BottomTab.Screen
        name='ScreenThree'
        component={ProfileScreen}
        options={{headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? 'person-sharp':'person-outline' } size={30} color={'black'} />
          ),
          title: "", 
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
   

});