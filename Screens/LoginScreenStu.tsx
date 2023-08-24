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

interface LoginScreenProps {
  navigation: any;
}
const LoginScreenStu = (props: LoginScreenProps) => {
  const Login = async () => {
    props.navigation.navigate('Home');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.InnerContainer}>
        <View style = {{height: "50%", width: '90%', backgroundColor: 'white', alignSelf:'center', top: 200, padding:30, borderRadius: 50, elevation: 5}}>
            <Text style={styles.login}>LOGIN</Text>
            <View style = {{marginLeft: 10}}>
                <View >
                    <TextInput
                    style={styles.textInput}
                    placeholder="Type your Mat No"
                    onChangeText={newText => setEmail(newText)}
                    defaultValue={email}></TextInput>
                    <View style={styles.line}></View>
                </View>
                <View>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Type your password"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}></TextInput>
                    <View style={styles.line}></View>
                </View>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={Login}>
            <Text style={styles.loginBtnTxt}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.forgetPassTxt}>Forgot password</Text>
            </TouchableOpacity>
            <Text style={styles.orSignTxt}>Or sign in using</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate('SignupStu')}>
            <Text style={styles.orSignTxt}>Do you have an account? Create</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  InnerContainer: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',

  },
  BackgroundImg: {
    // flex:8,
    // resizeMode: 'cover',
    // justifyContent: 'center',
  },
  line: {
    width: '100%',
    height: 2,
    alignSelf: 'flex-start',
    borderColor: '#003559',
    backgroundColor: '#003559',
  },
  container: {
    flex: 1,
  },
  textInput: {
    marginTop:10,
    alignSelf: 'flex-start'
    //height: 10,
    //borderRadius: 20,
  },
  loginBtn: {
    backgroundColor: '#38B6FD',
    width: 300,
    height: 41,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    //padding:20,
    borderRadius: 20,
    shadowOpacity: 0.2,
    shadowRadius: 4000,
    elevation: 5,
  },
  loginBtnTxt: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  forgetPassTxt: {
    marginTop: 10,
    alignSelf: 'flex-end',
    //paddingRight:70,
    color: '#003559',
  },
  orSignTxt: {
    marginTop: 10,
    alignSelf: 'center',
    color: '#003559',
  },
  google_appleBtn: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  login: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#003559',
  },
});

export default LoginScreenStu;
