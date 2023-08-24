import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface StudentStaffProps {
  navigation: any;
}
const StudentStaffSignup = (props: StudentStaffProps) => {
  const SignupScreenstu = async () => {
    props.navigation.navigate('SignupStu');
  };


  return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.innerbox}>
            <Text style = {{alignSelf:'center', fontWeight:'800',color:'black',fontSize: 30, marginBottom: 70}}>Signup</Text>
            <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                    <TouchableOpacity style  = {styles.Avatar} onPress={SignupScreenstu}>
                    <Ionicons name={ "person-sharp"} size={40} color={'black'}/>
                    </TouchableOpacity>
                        <Text style = {{fontWeight:'800',color:'black',fontSize: 18, top:10,alignSelf: 'center'}}>Student</Text>
                </View>
                <View>
                    <TouchableOpacity style  = {styles.Avatar} onPress={()=>{props.navigation.navigate('SignupSta')}}>
                    <Ionicons name={ "book"} size={40} color={'black'}/>
                    </TouchableOpacity>
                        <Text style = {{fontWeight:'800',color:'black',fontSize: 18, top:10,alignSelf: 'center'}}>Staff</Text>
                </View>
            </View>
            <TouchableOpacity  style = {{alignSelf: 'center', marginTop:40}}onPress={()=>{props.navigation.navigate('StudentStaff')}}>
              <Text style = {{fontWeight: '500', color: 'black'}}>back to login?</Text>
            </TouchableOpacity>
        </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  innerbox:{
    height: 450,
    width: 390,
    backgroundColor:'white',
    borderRadius: 50,
    elevation: 5,
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  Avatar:{
    height: 100,
    width: 100,
    borderRadius: 3505,
    backgroundColor:'#38B6FD',
    alignItems:'center',
    justifyContent:'center',
  },
 
});

export default StudentStaffSignup;
