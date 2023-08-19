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
} from 'react-native';

interface ChatScreenProp {
  navigation: any;
}

const SignUpScreen = (props: ChatScreenProp) => {
  const Confirmed = async () => {
    props.navigation.navigate('Home');
  };

  const [selected, setSelected] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [language, setLanguage] = useState('');

  const data = [
    {key: 'en', value: 'English'},
    {key: 'fr', value: 'French'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.InnerContainer}>
        <View style = {{height: "65%", width: "90%", backgroundColor: "white", alignSelf: 'center', padding: 40, borderRadius: 20, elevation:5 }}>
            <Text style={styles.signUpTxt}>SIGNUP</Text>
            <View>
                <Text style={styles.hintTxt}>Name</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Type your name"
                onChangeText={newText => setName(newText)}
                defaultValue={name}
                />
                <View style={styles.line}></View>   
            </View>
            <View>
                <Text style={styles.hintTxt}>Email</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Type your user name"
                onChangeText={newText => setEmail(newText)}
                defaultValue={email}></TextInput>
                <View style={styles.line}></View>
            </View>
            <View>
                <Text style={styles.hintTxt}>Password</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Type your password"
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}></TextInput>
                <View style={styles.line}></View>
            </View>
            <View>
                <Text style={styles.hintTxt}>Confirm Password</Text>
                <TextInput
                style={styles.textInput}
                placeholder="re-type your password"
                onChangeText={newText => setConPassword(newText)}
                defaultValue={conPassword}></TextInput>
                <View style={styles.line}></View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.centeredTxt}>
            You can aways change this in settings
            </Text>
            <TouchableOpacity style={styles.confirmedBtn} onPress={Confirmed}>
            <Text style={styles.confirmedBtnTxt}>CONFIRM</Text>
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
    //paddingTop: 160,

    justifyContent: 'center',
  },
  BackgroundImg: {
    //background image goes here
    // flex:8,
    // resizeMode: 'cover',
    // justifyContent: 'center',
  },

  container: {
    flex: 1,
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
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 40,
    writingDirection: 'ltr',
    //height: 10,
    //borderRadius: 20,
  },
  confirmedBtn: {
    backgroundColor: '#38B6FD',
    width: 300,
    height: 41,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    //padding:20,
    borderRadius: 20,
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
  },
});

export default SignUpScreen;
