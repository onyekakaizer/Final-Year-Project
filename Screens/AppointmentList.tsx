import React from 'react';
import { View, Text, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AppointmentList = () => {
  return (
   <ScrollView style = {styles.container}>
        <Text style = {{alignSelf: 'center', fontWeight:'700', color: 'black', fontSize: 24, marginBottom: 50}}>Appointments</Text>
        <Text style = {{ fontWeight:'700', color: 'black', fontSize: 20, marginBottom: 30}}>Next</Text>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>
        <Text style = {{ fontWeight:'700', color: 'black', fontSize: 20, marginBottom: 20}}>Then</Text>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.appointBtn}>
            <Text style = {{fontWeight:'700', color: 'black', fontSize: 20,}}>10am Monday 25th</Text>
        </TouchableOpacity>



   </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#38B6FD',
        padding: 10,

    },appointBtn:{
        backgroundColor:'#e2e2e2',
        height: 50,
        width:'75%',
        borderRadius: 30,
        elevation:5,
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'center',
        marginBottom: 30
    },
});

export default AppointmentList;
