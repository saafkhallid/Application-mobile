import React, { useState, useEffect } from 'react';
import axios from 'axios';
import hour from './Component/hour';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Picker,
} from 'react-native';

const styles = StyleSheet.create({
  body:{
   
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
      },
  form: {
   
    padding: '10%',
    height: 'auto',
  
  
  },
  btn: {

    marginTop: 50,
    backgroundColor: '#58ACFA',

  },
  input: {
    height: 40,
    margin: 13 ,
    borderWidth: 1,
    width: 300,
    borderColor: '#58ACFA',
  },
});

const CreateRdv = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [cin, setCin] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [planing, setPlaning] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const getPlaning = async () => {
    try {
      const { data } = await axios.get('http://192.168.1.4:3000/date/getplaning');
      setPlaning(data);
      console.log(data)

    } catch (error) {
      throw Error(error)
    }

  };
  useEffect(() => {
    getPlaning();
  }, []);

  console.log('my planing', planing)
  let Heure = [];
  if (planing) {
    for (let i = 0; i <= planing.totalRDV; i++) {

      Heure.push(

        <Picker.Item key={i} label={hour[i]} value={hour[i]} />
      )
    }
  }

  

  const sendData = async () => {
    fetch('http://192.168.1.4:3000/date/rdv', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rdvHour: selectedValue,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        CIN: cin,


      }),
    });
    console.log('test')

  };
  return (
    < View  style={styles.body}> 
      <Text style={{ textAlign: 'center', fontSize: 40,color:'#4000FF'}}>Rendez-vous</Text>
      <SafeAreaView>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Choisi l'heure" value="" />
          {Heure}
        </Picker>
        <TextInput
          style={styles.input}
          onChangeText={setfirstName}
          value={firstName}
          placeholder="first name"
          keyboardType="default"

        />
           <TextInput
          style={styles.input}
          onChangeText={setfirstName}
          value={firstName}
          placeholder="first name"
          keyboardType="default"

        />
        <TextInput
          style={styles.input}
          onChangeText={setlastName}
          value={lastName}
          placeholder="last name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setemail}
          value={email}
          placeholder="email"
          keyboardType="default"
        />


        <TextInput
          style={styles.input}
          onChangeText={setphone}
          value={phone}
          placeholder="phone"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCin}
          value={cin}
          placeholder="CIN"
          keyboardType="default"
        />
        <Button
        style={styles.btn}
          onPress={sendData}
          title="send"
          color="#58ACFA"
        />
      </SafeAreaView>
    </View>
   
  );
};
export default CreateRdv;
