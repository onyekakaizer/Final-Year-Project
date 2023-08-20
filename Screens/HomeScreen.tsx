import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style = {{paddingHorizontal: 10}}>
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', color:"black", top: 12, fontSize: 24}}>Home</Text>
      </View>
      <View style = {{flexDirection: 'row',justifyContent:'space-between', alignItems:'center', top: 50}}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 22,}}>Welcome Back John</Text>
        <View style={{width: 50, height:50, borderRadius: 50,alignSelf:'flex-end', backgroundColor:'#38B6FD', right : 20 }}></View>
        
      </View>
      <View style = {{marginTop: 100, flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style = {{fontWeight: '400', color: 'black', fontSize: 20}}>Next Appointments</Text>
          <TouchableOpacity><Text style = {{fontWeight: '600', color: 'black', fontSize: 20, right: 15}}>See all</Text></TouchableOpacity>
      </View>
      <View style = {{height: 70,  flexDirection: 'row', width:'90%', backgroundColor:'#38B6FD',alignSelf:'center', padding:4, borderRadius: 30, marginTop: 40, elevation: 5,}}>
        <View
        style ={{height:40, width: 40, borderRadius: 10,left:10, margin: 10,  backgroundColor:'white', elevation:5 }}></View>
        <View style = {{ justifyContent: 'flex-start', margin: 10}}>
          <Text  style = {{fontWeight:'500', marginRight: 10}}>Mrs. Anita</Text>
          <Text  style = {{fontWeight:'700', marginRight: 10}}>Therapist</Text>
        </View>
        <View style = {{ justifyContent: 'flex-start',  margin: 10, marginLeft:70}}>
          <Text  style = {{fontWeight:'300',color: 'white'}}>Monday 20th july</Text>
          <Text  style = {{fontWeight:'300',color: 'white' }}>Therapist</Text>
        </View>
      </View>

      
            <View style = {{top: 50,  flexDirection: 'row', alignItems:'center',  justifyContent:'space-between'}}>
                <Text style = {{fontWeight: '400', color: 'black', fontSize: 20}}>Counsellor</Text>
                <TouchableOpacity><Text style = {{fontWeight: '600', color: 'black', fontSize: 20, right: 15}}>More info</Text></TouchableOpacity>
            </View>
         
         <View style ={{justifyContent: 'center',marginTop: 120,}}>
            <TouchableOpacity style ={styles.counsellorIcon}>
              <View style= {{backgroundColor:'white', borderRadius: 20, height: 100, width: 90, alignSelf:'center', elevation: 5 }}>
              </View>
              <View style = {{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop: 7,}}>
                <Text style = {{fontWeight:'600'}}>Mrs ania</Text>
                <View style = {{height: 10, width:10, backgroundColor:'green',marginLeft: 2,borderRadius: 7,}}></View>
              </View>


            </TouchableOpacity>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  counsellorIcon:{
    height: 200,
    width: 150,
    borderRadius: 40,
    alignSelf:'center',
    backgroundColor: '#38B6FD',
    justifyContent: 'center',
  }
});

export default HomeScreen;
