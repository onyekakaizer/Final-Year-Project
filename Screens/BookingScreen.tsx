import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Appointment screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppointmentScreen;
