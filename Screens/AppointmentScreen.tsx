import React from 'react';
import { View, Text, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';
import {  } from 'react-native-gesture-handler';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';

const AppointmentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{justifyContent: 'flex-start', fontWeight:'600', color: 'black', top: 10, fontSize: 20, alignSelf: 'center'}}>Councellor Profile</Text>
      <View style = {styles.avatar}></View>
      <View style = {{flexDirection: 'row', alignItems:'center', top: 30, alignSelf:'center'}}>
        <Text style = {{ fontWeight: '700'}}>Mrs Anita</Text>
        <View style = {{height: 10, width: 10, borderRadius:90, backgroundColor: '#00ff33', marginLeft: 5}}></View>
      </View>
        <View style = {{backgroundColor: '#38B6FD', height: 700,width: "100%",alignSelf:'center',top:50,paddingHorizontal:40, paddingVertical:30, borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
          <Text style = {{fontWeight: '700',color: 'black', fontSize: 20}}>Date</Text>
          <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity style = {styles.date}>
                <Text style = {{fontWeight: '700', color:'black'}}>Date</Text>
              </TouchableOpacity>
              <Ionicons name={'time'} size={30} color={'black'} style  = {{alignSelf:'center'}}/>
          </View>
          <Text style = {{fontWeight: '700',color: 'black', fontSize: 20, marginVertical: 20}}>Time</Text>
            <View style = {{flexDirection: 'row',justifyContent:'center', marginVertical: 10}}>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row',justifyContent:'center', marginVertical: 10}}>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row',justifyContent:'center', marginVertical: 10}}>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.time}>
                <Text style = {{fontWeight:'700', color: 'black'}}>7:00am</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.makeappBtn}>
              <Text style = {{fontWeight:'700', color:'black', fontSize: 14}}>Make an Appointment</Text>
            </TouchableOpacity>
            
      </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar:{
    height: 170,
    width: 170,
    top: 20,
    borderRadius:125,
    backgroundColor: '#e2e2e2',
    alignSelf:'center'

  },date:{
      justifyContent:'center',
      height: 40,
      width: 70,
      alignItems:'center',
      alignSelf:'center',
      backgroundColor:'#e2e2e2'
  },
  datesDisplay:{
    height: 70,
    width: '100',
  },
  time:{
    height: 45,
    width: 90,
    borderRadius: 30,
    backgroundColor:'#e2e2e2',
    alignItems:'center',
    justifyContent:'center',
    elevation: 5,
    marginHorizontal: 20,
  },
  makeappBtn:{
    width: "75%",
    height:50,
    borderRadius: 40,
    marginTop: 20,
    backgroundColor:'#e2e2e2',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    elevation: 4,


  },
});

export default AppointmentScreen;
