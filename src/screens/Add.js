import React, {Component} from 'react'
import {View, 
  Text, 
  StyleSheet, 
  Button, 
  Alert, 
  TextInput,
  TouchableOpacity
} from 'react-native'

import data from '../util/data.json'
import styles from '../util/Styles'

var id=0

class Add extends Component{
  constructor(props){
    super(props)

    this.state={
      nombre:''
    }

  }
  _onPressButton() {Alert.alert('Sirve el boton')}

  agregar=()=>{
    id = id+1
    data.push({
      "title" : this.state.nombre,
      "id": this.state.id
    })
    //this.props.navigation.navigate('Rooms'/* , {id: id } */), //this.state.id
    this.setState({
      nombre: ''
    })
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
                placeholder="NOMBRE" 
                value={this.state.nombre} 
                onChangeText={(nombre)=>{this.setState({nombre})}}
              />   
              <Text style= {Styles.paragraph}>
                  Numero: 
              </Text>
              <TextInput 
                style={Styles.name} 
                placeholder="NUMERO"
              />
            </View>

            <View style={Styles.headerRigth}>
              
              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.buttonSecondary}>
                  <Text style={styles.buttonTextSecondary}>
                    CAPTURAR
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.buttonSecondary}>
                  <Text style={styles.buttonTextSecondary}>
                    ESCOGER
                  </Text>
                </View>
              </TouchableOpacity> 

              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.buttonSecondary}>
                  <Text style={styles.buttonTextSecondary}>
                    ELIMINAR
                  </Text>
                </View>
              </TouchableOpacity>
  
            </View>


        </View>



        <View style = {Styles.footer}>


            <View style={Styles.footerLeft}>
              <TouchableOpacity onPress={this.cancelar}>
                <View style={styles.buttonPrimary}>
                  <Text style={styles.buttonTextPrimary}>
                    Eliminar -
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

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
    flex: 2,
    flexDirection:'row',
    marginVertical:'15%',
  },


  headerLeft: {
    flex: 1.2,
    marginVertical:'7%',
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
     borderWidth: 1,
     borderColor: 'gray',
     padding: 2
  },


  footer:{
    flex: 0.5,
    alignContent:'flex-end',
    flexDirection : 'row',
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
  }

})
export default Add