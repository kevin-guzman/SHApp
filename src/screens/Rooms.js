import React, {Component} from 'react'
//import Constants from 'expo-constants';
import {View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  FlatList,
  Button,
  Alert,
  TouchableHighlight,
  Image,
  ScrollView,
  Slider
} from 'react-native'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import {Card} from 'react-native-paper'
import style from '../util/Styles'
//import im from '../media/Batman1.jpg'


import {connect} from 'react-redux'
import RoomCard from '../components/RoomCard';
import UtilHeader from '../components/UtilHeader';

class Rooms extends Component{
    constructor(props) {
        super(props);
        this.state = {
        SliderInfo:'',
        Rooms:[
          {
            id: 0,
            room: ""
          }
        ]
        };
    }

    changeRoomValue = (room, value) =>{
      console.log(room,value)
      this.setState({
        SliderInfo: room.toString() + ":" + value,
        val:value
        })
    }

    List = () => {
      return(
        this.props.rooms.map((x,i) => {
            return(
                <View key={i} >
                  <RoomCard
                    title={x.room}
                    changeRoomValue={this.changeRoomValue}
                  >
                  </RoomCard>
                </View>
            )
        })
      )
    }

    agregar = () =>{
        this.props.navigation.navigate('Add')
    }

    render(){
      const {navigation}= this.props;
      const {value} = this.state;
      const { params } = this.props.navigation.state
      const {SliderInfo} = this.state;
      const {RoomCounter} = this.state
        return(
        <View style={Styles.container}>
          <UtilHeader
            title={`Habitaciones: ${this.props.rooms.length}`}
            iconName='plus-circle'
            iconColor='black'
            iconPress={this.agregar}
          />
            <View style={Styles.containerr}>
                <ScrollView>
                {this.List()}
                </ScrollView>               
            </View>
            <Text>
                {SliderInfo}
            </Text>
        </View>
        )
    }
}

const Styles = StyleSheet.create({
  containerr: {
    flex: 4.7,
    marginHorizontal:'4%',
    marginTop:10
    //marginBottom:'0%'
    //marginTop: Constants.statusBarHeight,
  },
  image:{
    width:40,
    height:40,
    borderRadius:3,
  },
  habitationInfo:{
    backgroundColor: 'rgba(5,5,15,0.2)',
    borderColor:'black',
    borderWidth:0.5,
    margin:'3%'
  },
  addButton:{
    paddingHorizontal:'0%',
    paddingStart:'0%', 
    alignSelf:'flex-end',
    margin:'2%',
  },
  addTouchale:{
    borderWidth:0.9,
    borderColor:'black', //rgba(0,0,0,0.2)
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    //backgroundColor:'#fff',
    borderRadius:50,
    backgroundColor: 'rgba(5,5,15,0.2)',
  },
  container :{
    flex : 1,
    backgroundColor : 'white',
  },
  header: {
    flex: 1.5,
    alignItems : 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    //backgroundColor: 'rgba(5,5,15,0.1)',
    //borderColor:'black',
    //borderWidth:1,
    marginHorizontal:'5%',
    marginTop:'5%'
    //paddingTop:'6%'
  },
  paragraph :{
    fontSize : 20,
    color : 'rgba(90,40,130,1)',
    textAlign : 'center',
    textDecorationColor:'rgba(2,20,202,1)',
    textDecorationStyle:'solid',
    margin:'2%'
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'rgba(5,5,15,0.1)',
    borderTopColor:'black',
    borderWidth:0.6,
    marginHorizontal:'2%',
  },
  
})

export default connect(
  (state)=>({user:state.user, rooms:state.rooms }),
)
(Rooms)
