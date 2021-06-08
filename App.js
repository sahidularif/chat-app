import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWtm4DIERX03DxxF5Qd74VwXio8qe5WVs",
  authDomain: "react-native-chat-f4b80.firebaseapp.com",
  projectId: "react-native-chat-f4b80",
  storageBucket: "react-native-chat-f4b80.appspot.com",
  messagingSenderId: "1008119314507",
  appId: "1:1008119314507:web:5fda262885593b5d1775ce"
};
firebase.initializeApp(firebaseConfig)
// 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
