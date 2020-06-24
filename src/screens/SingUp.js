import React, {Component} from 'react'
import { Icon } from 'react-native-elements' 
import {
    View,
    Text, 
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native'

//var StateMessage = ''

class SingUp extends Component{

    

    constructor(props){
        super(props)
        this.state={
          sh:'Smart House App',
          UserName:'',
          Password:'',
          Mail:'',
          bienvenido:'¡Bienvenido!',
          StateMessage : ''
          
        }
      }

    home = () => {
        this.props.navigation.navigate('Inicio', {UserName: JSON.stringify({UserName}), Password:'prro',})
    }

    save = () =>{

    if ((this.state.UserName !== "") && (this.state.Password !== "") && (this.state.Mail !== "")){

        this.setState({StateMessage: 'Bienvenido ' + this.state.UserName + '.'})

      }

      if (this.state.UserName === ""){ //Ingrese los datos en todos los campos requeridos.

        this.setState({StateMessage: 'Ingrese un nombre de usuario'})

      }

      //for (int i=0 ; i< Password.maxLength() ; i++){

      //}


    }

        render(){
            let {UserName}=this.state
            let {Password}=this.state
            let {Mail}=this.state
            let {StateMessage} = this.state

                return(
                    
                    <View style={Styles.container}>


                        <View style={Styles.login}>
                            <View style={Styles.icnonInput}>
                                <Icon name='person'  />
                                <TextInput 
                                    style={Styles.textin} placeholder={" Nombre de usuario"} 
                                    onChangeText={(UserName) =>  this.setState({UserName})}
                                    maxLength={28} 
                                />
                            </View>

                            <View style={Styles.icnonInput}>
                                <Icon name='security'  />
                                <TextInput 
                                    style={Styles.textin} 
                                    placeholder={"  Contraseña  "}
                                    onChangeText={(Password) => this.setState({Password})}
                                    secureTextEntry={true}
                                    maxLength={28}
                                />
                            </View>

                            <View style={Styles.icnonInput}>
                                <Icon name='mail'  />
                                <TextInput 
                                    style={Styles.textin} 
                                    placeholder={" Correo electónico "}
                                    onChangeText={(Mail) => this.setState({Mail})}
                                />
                            </View>

                            <View style={{alignItems:'center',paddingVertical:'3%', flex:1}}>
                                <Text style={{fontSize: 10}}  >
                                    {StateMessage}
                                </Text>
                            </View>

                        </View>


                        <View style={Styles.buttonS} >
                            <Button 
                                title={"Guardar y registrar"}  
                                onPress={() => this.save()}
                            />
                        </View>


                    </View>

                )
                

        }
        
}

//this.props.navigation.navigate('Welcome', {UserName: JSON.stringify(UserName), Password:'prro',})

const Styles = StyleSheet.create({

    container :{
      flex : 1,
      backgroundColor : '#E4F2F8',
      paddingVertical:'10%',
    },
  
    paragraph :{
      fontSize : 33,
      textAlign : 'center',
      color: 'rgb(20,10,50)',
     },
  
     paragraph2:{
       fontSize: 13,
       marginVertical:'1.5%',
       textAlign:'center',
       color:'rgba(150,90,255,0.9)'
     },
  
  
    button: {
      borderWidth : 0.5,
      borderColor: '#626AE5',
      width: 234,
      height: 57,
      backgroundColor: 'white',
      borderRadius: 21,
    },
  
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'black',
      fontSize: 23,
    },
  
    textin:{
      fontSize:15,
      alignSelf:'flex-start',
      paddingVertical:'1%',
    },
  
    icnonInput:{
      flexDirection:'row',
      padding:'2%',
      alignSelf:'center',
      borderBottomColor:'black',
      borderBottomWidth:0.5
      //borderWidth:0.35,
      //borderColor:'gray',
      
    },
  
    login:{
      marginVertical:'12%',
      marginHorizontal:'5%',
      flex:1.1,
      alignItems:'center',
      flexDirection:'column',
    },
  
    buttonS:{
      paddingVertical:'15%',
      alignContent:'flex-end',
      paddingHorizontal:'20%',
      flex:0.2,
      alignContent:'center'
    },
    
  })







export default SingUp