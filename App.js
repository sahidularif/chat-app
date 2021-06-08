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
//Firestore & YellowBox setup
YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function App() {
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
      readUser()
      const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
          const messagesFirestore = querySnapshot
              .docChanges()
              .filter(({ type }) => type === 'added')
              .map(({ doc }) => {
                  const message = doc.data()
                  //createdAt is firebase.firestore.Timestamp instance
                  //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                  return { ...message, createdAt: message.createdAt.toDate() }
              })
              .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          appendMessages(messagesFirestore)
      })
      return () => unsubscribe()
  }, [])

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
