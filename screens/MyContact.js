import React, { useState, useEffect } from 'react'

import { 
  View,
  Text,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native/types'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts'
import { useIsFocused } from '@react-navigation/native';

export default function MyContact({ navigation }) {

  const isFocused = useIsFocused();

  const [MyContact, setMyContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, [isFocused])

  async function getAllContacts() {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      );
      if(permission === 'granted'){
        const contacts = await Contacts.getAll();
        setMyContacts(contacts);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Ionicons 
        name='add-circle'
        size={62}
        color={green}
        style={styles.addIcon}
        onPress={() => navigation.navigate('CreateContact')}
      />
    </View>
  )
}


const styles = StyleSheet.create({

})