import React from 'react'
import {
    View,
    Text,
    Slider,
    Image,
    StyleSheet
} from 'react-native'
import { Card } from 'react-native-paper'
import im from '../util/img/Fondo12.jpg'

let RoomCard = (props) =>{
    return(
        <Card style={Styles.card} >
            <View style={{marginLeft:'40%'}} >
                <Card.Title 
                    title={props.title}
                    subtitle='Familiar'
                />
            </View>
            <Card.Content style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Image
                    source={im}
                    style={Styles.image}
                >
                </Image>
                <Slider
                    style={{alignItems:'center', flex:1, paddingVertical:'2%'}}
                    step={1}
                    maximumValue={100}
                    onValueChange={(value) => {props.changeRoomValue(props.title, value)}}
                    /* onValueChange={ value => 
                                    {
                                    this.setState({value: value}), 
                                    this.setState({
                                                    SliderInfo: x.room.toString() + ":" + value,
                                                    val:value
                                                    })
                                    }
                                } */ // Se añade el cuarto y el valor del slider a la variavle SliderInfo                             value => {this.Sliderval(value,parseInt(params.id))}
                    value={50}
                />
            </Card.Content>
        </Card>
    )
}

const Styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:3,
    },
    card:{
        marginHorizontal:'1%',
        marginVertical:'1.5%',
        backgroundColor:'#f5f5f5',
    }

})

export default RoomCard