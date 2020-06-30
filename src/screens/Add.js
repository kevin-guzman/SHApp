import React, {Component} from 'react'
import {View, 
  Text, 
  StyleSheet, 
  Button, 
  Alert, 
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'

import {connect} from 'react-redux'
import {addRoom,removeRoom} from '../actions/rooms'
import styles from '../util/Styles'


//var id =0
class Add extends Component{
  constructor(props){
    super(props)

    this.state={
      nombre:'',
      grupo:'',
    }

  }

  
  _onPressButton() {Alert.alert('Sirve el boton')}

  capturar = () =>{
    this.props.navigation.navigate('Capture')
  }
  agregar = async() =>{
    //id+=1;
    let id = this.props.rooms.length;
    id+=1;
    this.props.addRoom({
      id: id,
      room: this.state.nombre,
      groupRoom: this.state.grupo,
      imageRoom: this.props.navigation.getParam('photo')
    })
    this.props.navigation.navigate('Rooms')
  }

  cancelar = () => {
    this.props.navigation.navigate('Rooms')
  }

  render(){
    return(
      <View style={Styles.container}>
        <View style = {Styles.header}>

            <View style={Styles.headerLeft}>
              <Text style= {Styles.paragraph}>
                  Nombre: 
              </Text>
              <TextInput 
                style={Styles.name} 
                placeholder="Nombre" 
                value={this.state.nombre} 
                onChangeText={(nombre)=>{this.setState({nombre})}}
              />   
              <Text style= {Styles.paragraph}>
                  Grupo de habitaciones: 
              </Text>
              <TextInput 
                style={Styles.name} 
                placeholder="Nombre del grupo (o piso)"
                value={this.state.grupo} 
                onChangeText={(grupo)=>{this.setState({grupo})}}
              />
              <View style={Styles.image} >
                <Image
                  style={{flex:1}}
                  width={200}
                  height={200}
                  source={{uri: this.props.navigation.getParam('photo')}}
                />
              </View>
              
            </View>
        </View>



        <View style = {Styles.footer}>


            <View style={Styles.footerLeft}>
              <TouchableOpacity onPress={this.cancelar}>
                <View style={styles.buttonPrimary}>
                  <Text style={styles.buttonTextPrimary}>
                    Cancelar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={this.capturar}>
                <View style={styles.buttonPrimary}>
                  <Text style={styles.buttonTextPrimary}>
                    CAPTURAR
                  </Text>
                </View>
              </TouchableOpacity>

            <View style={Styles.footerRight}>
              <TouchableOpacity onPress={this.agregar}>
                <View style={styles.buttonPrimary}>
                  <Text style={styles.buttonTextPrimary}>
                    Añadir +
                  </Text>
                </View>
              </TouchableOpacity>
            </View>


        </View>
        
        
      </View>
    )

  }
}
const Styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : 'white',//'#E4F2F8',
    padding: 10
  },
  header: {
    flex: 3,
    flexDirection:'row',
    marginVertical:'15%',
    //backgroundColor:'red'
  },
  headerLeft: {
    flex: 1.2,
    marginVertical:'10%',
  },
  headerRigth: {
    flex: 1
  },
  paragraph :{
    fontSize : 20,
    color : 'black',
    textAlign : 'center',
  },
  name:{
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom:'5%',
    marginHorizontal:'10%'
  },
  footer:{
    flex: 0.5,
    alignContent:'flex-end',
    flexDirection : 'row',
    //backgroundColor:'blue'
  },
  footerLeft:{
    flex:1,
    marginHorizontal:5,
    alignItems:'center'
  },
  footerRight:{
    flex:1,
    marginHorizontal:5,
    alignItems:'center'
  },
  image:{
    flex:1,
    alignSelf:"center",
    borderColor: 'gray',
    borderWidth: 1
  }

})
export default connect(
  (state)=>({user:state.user, rooms:state.rooms }),
  {
    addRoom,
    removeRoom
  }
)
(Add)