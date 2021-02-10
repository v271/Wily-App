import React from 'react';
import { Alert } from 'react-native';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';


export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId:'',
            password:''
        }
    }
    Login = async(email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if (response) {
                    this.props.navigation.navigate('Transaction')
                }  
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        Alert.alert("User doesn't exist")
                        break;

                    case 'auth/invalid-email':
                        Alert.alert("Incorrect Email or Password")
                        break;
                }
            }
        }
        else{
            Alert.alert("Enter Email Id and Password")
        }
    }
    render(){
    return(
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop : 20}}>
           <View>
               <Image
               source = {require("../assets/booklogo.jpg")}
               style = {{width : 200,height :200}}
               />
               <Text style = {{alignItems:'center',fontSize:30}}>Wily</Text>
           </View>

           <View>
               <TextInput
               style = {styles.loginBox}
               placeholder = "abc@example.com"
               keyboardType = "email-address"
               onChangeText = {(text)=>{
                   this.setState({emailId : text})
               }}
               /> 

            <TextInput
               style = {styles.loginBox}
               secureTextEntry = {true}
               placeholder = "Enter your password"
               onChangeText = {(text)=>{
                   this.setState({password : text})
               }}
               />   
           </View>
           <View>
               <TouchableOpacity style = {{height : 30,widht:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
               onPress = {()=>{this.Login(this.state.emailId,this.state.password)}}
               >
                   <Text style = {{textAlign:'center'}}>Login</Text>
               </TouchableOpacity>
           </View>
        </KeyboardAvoidingView>

    )
    }
}

const styles = StyleSheet.create({
    loginBox:
    {
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10
    }
  })