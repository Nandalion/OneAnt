import { Button, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useState, useRef ,useEffect} from 'react'
import PhoneInput from "react-native-phone-number-input";
import auth from '@react-native-firebase/auth';



const Login = ({ navigation }) => {

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  console.log(value,'valueeeeeeee')
  console.log(formattedValue,'forrrrrrrrrrrrrrrmate')  

  //use or delete 

  // const [confirm, setConfirm] = useState(null);

  // // verification code (OTP - One-Time-Passcode)
  // const [code, setCode] = useState('');


  // const signInWithPhoneNumber=async(phoneNumber) =>{
  //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  // }

  // const confirmCode = async() => {
  //   try {
  //     await confirm.confirm(code);
  //   } catch (error) {
  //     console.log('Invalid code.');
  //   }
  // }

  // if (!confirm) {
  //   return (
  //     <Button
  //       title="Phone Number Sign In"
  //       onPress={() => signInWithPhoneNumber('+91 7358175074')}
  //     />
  //   );
  // }

  
  
  return (
    <View style={{ flex: 1,justifyContent:'center' }}>

      {showMessage && (
        <View>
          <Text>Value : {value}</Text>
          <Text>Formatted Value : {formattedValue}</Text>
          <Text>Valid : {valid ? "true" : "false"}</Text>
        </View>
      )}

      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
         
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
        }}
      >
        <Text>Check</Text>
      </TouchableOpacity>
      <Text>Login</Text>
      <Button title='Button' onPress={() => navigation.navigate("Googlesign")} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

})