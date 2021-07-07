import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
 import DatePicker from 'react-native-datepicker';


const styles = StyleSheet.create({
  body:{

flex:1,
justifyContent:'center',
alignItems:'center',

  },
 
  btn: {
    width: 300,
   
    marginTop: 50,
    backgroundColor: '#58ACFB',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#58ACFA',

    borderWidth: 1,
  },
  datePickerStyle: {
    width: 300,
    marginTop: 20,
    borderColor: '#58ACFA'
  },
  datePickerStyle2: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#E36BAE'
  
  },
});

const Planing = () => {
  const [data, setData] = useState('');
  const [datDepart, setDatDepart] = useState('01-01-2021');
  const [datFin, setDatFin] = useState('01-01-2021');

  const sendData = async () => {
    fetch('http://192.168.1.4:3000/date/planing', { 
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalRDV: parseInt(data, 10),
        dateDepart: datDepart,
        dateFin: datFin,
      }),
    });
  };
  return (
    <View style={styles.body}>
    <View style={styles.form}>
      <Text style={{ 
        textAlign: 'center', 
        fontSize: 40,   
        color:'#4000FF',
        marginBottom: 60,
         }}>
        Créer un rendez vous
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setData}
          value={data}
          placeholder="total RDV"
          keyboardType="numeric"
        />
        <DatePicker
          style={styles.datePickerStyle}
          date={datDepart}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
         
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              
            },
           
          }}
          onDateChange={dateDepart => setDatDepart(dateDepart)}
        />
        <DatePicker
          style={styles.datePickerStyle2}
          date={datFin} 
          mode="date" 
          placeholder="select date"
          format="DD-MM-YYYY"
         
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              
            },
           
          }}
          onDateChange={dateFin => setDatFin(dateFin)}
        />
        <Button
          onPress={sendData}
          title="send"
          color="#58ACFA"
          style={styles.btn}
        />
      </SafeAreaView>
    </View>
    </View>
  );
};

export default Planing;
