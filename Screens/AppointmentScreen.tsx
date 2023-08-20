import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{justifyContent: 'flex-start', fontWeight:'600', color: 'black', top: 10, fontSize: 20}}>Councellor Profile</Text>
      <View style = {styles.avatar}></View>
      <View style = {{flexDirection: 'row', alignItems:'center', top: 30}}>
        <Text style = {{ fontWeight: '700'}}>Mrs Anita</Text>
        <View style = {{height: 10, width: 10, borderRadius:90, backgroundColor: 'green', marginLeft: 5}}></View>
      </View>
      <View style = {styles.appointmentIcons}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  avatar:{
    height: 170,
    width: 170,
    top: 20,
    borderRadius:125,
    backgroundColor: 'grey',

  },
  appointmentIcons:{
    height: 10,
    width:'100%',
    backgroundColor: 'yellow',
    alignItems: 'flex-end',
  }
});

export default AppointmentScreen;
