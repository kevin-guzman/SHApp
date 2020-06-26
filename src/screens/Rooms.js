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
//import {SliderBase} from '@react-native-community/slider'

//import style from './Styles'
//import DATA from '../util/data.json'
import style from '../util/Styles'
//import im from '../media/Batman1.jpg'
//import { ListItem } from 'react-native-elements';

import {connect} from 'react-redux'


var i=0;
var j=0;

class Rooms extends Component{
    constructor(props) {
        super(props);
        setInterval(()=>{this.readStorage()},100)
        this.state = {
        value: 50,
        vectid:0,
        SliderInfo:'',
        ButtonState:'Off',
        ButtonValue: 0,
        Val:'',
        Rooms:[
          {
            id: 0,
            room: ""
          }
        ]
        };
    }

    async componentDidMount(){
      console.log(this.state.Rooms);
      try {
        await AsyncStorage.setItem('Rooms', JSON.stringify(this.state.Rooms));
        const myArray = await AsyncStorage.getItem('Rooms');
        if (myArray !== null) {
            //console.log(JSON.parse(myArray));
            this.setState({Rooms: JSON.parse(myArray)})
        }
      } catch (error) {
          Alert.alert(error)
      }
    }

    readStorage = async() =>{
      try {
        //await AsyncStorage.setItem('Rooms', JSON.stringify(this.state.Rooms));
        const myArray = await AsyncStorage.getItem('Rooms');
        if (myArray !== null) {
            //console.log(JSON.parse(myArray));
            this.setState({Rooms: JSON.parse(myArray)})
        }
      } catch (error) {
          Alert.alert(error)
      }
    }

    List = () => {
        return(
        this.props.rooms.map((x,i) => {
            if(i){
            let b='off';
            return(
                <View style={style.item} key={i} >
                <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                    <Text style={{fontSize:12,alignSelf:'center'}}>{x.room}</Text> 
                    <TouchableHighlight  onLongPress={()=>this.editar()}  onPress={()=>this.OnOff(x.room)} >
                    {/* <Image style={Styles.image} source={im}  /> */}
                      <Text>
                        rer
                      </Text>
                    </TouchableHighlight>
                </View>
                <Slider style={{alignItems:'center', flex:1, paddingVertical:'2%'}}
                    step={1}
                    maximumValue={100}
                    onValueChange={ value => 
                                    {
                                    this.setState({value: value}), 
                                    this.setState({
                                                    SliderInfo: x.room.toString() + ":" + value,
                                                    val:value
                                                    })
                                    }
                                } // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
                    value={50}
                    on
                />
                </View>
            )
          }
        })
        )
    }

    agregar = () =>{
        this.props.navigation.navigate('Agregar')
        //Alert.alert('Agregar')
    }

    cancelar = () =>{
        this.props.navigation.navigate('Welcome')
    }

    editar = () =>{
        Alert.alert('Editar')
    }

    OnOff (room) {
        
        if(i){
        this.setState({ButtonState: 'Off',SliderInfo: room.toString() + ':0'})
        //this.setState({SliderInfo: room.toString() + '0'})
        i=!i
        
        }else{
        this.setState({ButtonState: 'On', SliderInfo: room.toString() + ':100'})
        //this.setState({SliderInfo: room.toString() + '100'})
        i=!i
        }

        //Alert.alert('OnOFF')
    }


    render(){
        const {navigation}= this.props;
        const {value} = this.state;
        const { params } = this.props.navigation.state
        const {SliderInfo} = this.state;


        
            return(
            
            <View style={Styles.container}>

                <View style={Styles.containerr}>
                    <ScrollView>
                    {this.List()}
                    </ScrollView>               
                </View>

                <Text>
                    {SliderInfo}
                </Text>


                <View  style={Styles.footer} >
                    <View style={Styles.habitationInfo} >
                    <Text style= {Styles.paragraph}   > 
                        Habitaciones: {navigation.getParam('id',0)} 
                    </Text>
                    </View>
                    
                    <View style={Styles.addButton}>
                    <TouchableOpacity  
                        style={Styles.addTouchale}
                        onPress={()=>this.agregar()}
                    >
                        <Icon name={"add"}  size={30} color="#01a699" />
                    </TouchableOpacity>
                    </View>
                </View> 

                <View style={{width:'100%',height:'1%'}} >
                </View>

            </View>



        )

    }
}

const Styles = StyleSheet.create({
  containerr: {
    flex: 4.7,
    marginHorizontal:'4%',
    marginTop:50
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
