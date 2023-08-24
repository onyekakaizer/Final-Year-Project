import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  ToastAndroid,
  ScrollView
} from 'react-native';

interface ChatScreenProp {
  navigation: any;
}

const SignUpScreenStu = (props: ChatScreenProp) => {
  const Confirmed = async () => {
    props.navigation.navigate('Home');
  };




  return (
    <ScrollView style={styles.container}>
      <View style={styles.InnerContainer}>
            <Text style={styles.signUpTxt}>Student Sign Up</Text>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="First name"
                
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Last name"
               
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Saff Number"
                
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Faculty"
                
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Department"
               
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Course"
               
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Email"
                
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Password"
              
                />  
            </View>
            <View style = {{backgroundColor: '#d4d5d4', borderRadius: 40, elevation: 10, marginBottom: 15}}>
                <TextInput
                style={styles.textInput}
                placeholder="Re-enter password"
                
                />  
            </View>
            
            
            <TouchableOpacity onPress={() => props.navigation.navigate('StudentStaff')}>
            <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.confirmedBtn} onPress={Confirmed}>
            <Text style={styles.confirmedBtnTxt}>Signup</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  InnerContainer: {
    flex: 1,
    //paddingTop: 160,
  },
  BackgroundImg: {
    //background image goes here
    // flex:8,
    // resizeMode: 'cover',
    // justifyContent: 'center',
  },

  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  hintTxt: {
    textAlign: 'center',
    color: '#003559',
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: -5,
  },
  line: {
    marginTop: -10,
    width: '100%',
    height: 1,
    borderColor: '#003559',
    backgroundColor: '#003559',
  },
  textInput: {
    margin: 7,
    width: 300,
    height: 40,
    writingDirection: 'ltr',
    //height: 10,
    //borderRadius: 20,
  },
  confirmedBtn: {
    backgroundColor: '#38B6FD',
   padding: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    //padding:20,
    borderRadius: 30,
    shadowOpacity: 0.2,
    shadowRadius: 4000,
    elevation: 5,
  },
  confirmedBtnTxt: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  loginTxt: {
    marginTop: 10,
    alignSelf: 'flex-end',
    //paddingRight:70,
    marginBottom: -10,
    color: '#003559',
  },
  centeredTxt: {
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: '300',
    color: '#003559',
  },
  // presferedLanTxt:{
  //   fontSize: 15,
  //   alignSelf: 'center',
  //   fontWeight: '400',
  //   marginLeft:-190,
  //  // marginBottom:
  //   color: 'black'
  // },
  signUpTxt: {
    alignSelf: 'center',
    //marginBottom:20,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#003559',
    marginBottom:10,
    marginTop: 10
  },
});

export default SignUpScreenStu;
