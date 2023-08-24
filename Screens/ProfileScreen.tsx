import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.avatar}></View>
      <TouchableOpacity style = {styles.uploadProfileBtn}>
        <Text style  = {styles.leftText}>Upload profile Picture</Text>
      </TouchableOpacity>
      <View style = {[{flexDirection:"row", justifyContent:'space-between'}, ]}>
        <Text style = {styles.docText}>Name:</Text>
        <TextInput placeholder='Kaizer John' style = {{top: 40, fontWeight: '400',  color: 'black', fontSize: 20}}></TextInput>
      </View>
      <View style = {[{flexDirection:"row", justifyContent:'space-between'}, ]}>
        <Text style = {styles.docText2}>Matric No:</Text>
        <TextInput placeholder='ADUN/FS/19/273' style = {{top: 5, fontWeight: '400',  color: 'black', fontSize: 20}}></TextInput>
      </View>
      <View style = {[{flexDirection:"row", justifyContent:'space-between'}, ]}>
        <Text style = {styles.docText2}>Programme:</Text>
        <TextInput placeholder='Software engineering' style = {{top: 5, fontWeight: '400',  color: 'black', fontSize: 20}}></TextInput>
      </View>
      <View style = {[{flexDirection:"row", justifyContent:'space-between'}, ]}>
        <Text style = {styles.docText2}>Department:</Text>
        <TextInput placeholder='Computing Sciences' style = {{top: 5, fontWeight: '400',  color: 'black', fontSize: 20}}></TextInput>
      </View>
      <View style = {[{flexDirection:"row", justifyContent:'space-between'}, ]}>
        <Text style = {styles.docText2}>Faculty:</Text>
        <TextInput placeholder='Sciences' style = {{top: 5, fontWeight: '400',  color: 'black', fontSize: 20}}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38B6FD',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  leftText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  docText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    marginTop: 80,
  },  docText2:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    marginTop: 20
  },
  avatar:{
    height: 140,
    width:140,
    borderRadius: 80,
    backgroundColor:'#e2e2e2',
    alignSelf:'center',
    top: 50,
  },uploadProfileBtn:{
    width:'70%',
    height: 50,
    backgroundColor:'#e2e2e2',
    elevation:5,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    top: 70,
    marginBottom: 20,
  },
});

export default ProfileScreen;
