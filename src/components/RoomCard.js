import React, {useState, useEffect} from 'react'
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
    let [sliderValue, setSliderValue] = useState(50)
    let [bgColor, setBgColor] = useState(props.bgColor)
    return(
        <Card style={Styles.card} >
            <Card.Content style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                <Image
                    source={{uri: props.imageUri}}
                    style={Styles.image}
                />

                <View style={Styles.cardView} >
                    <View>
                        <Text style={Styles.title} >
                            {props.title}
                        </Text>
                        <Text style={Styles.subtitle} >
                            {props.subtitle}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',}} >
                        <Slider
                            style={{alignItems:'center', flex:1, paddingVertical:'2%'}}
                            step={1}
                            maximumValue={100}
                            onValueChange={(value) => 
                                {
                                    props.changeRoomValue(props.title, value)
                                    setSliderValue(value)
                                }
                            }
                            value={50}
                        />
                        <Text>
                            {`${sliderValue}%`}
                        </Text>
                    </View>
                </View>
                
                
            </Card.Content>
        </Card>
    )
}

const ImageSize = 70;

const Styles = StyleSheet.create({
    image:{
        width:ImageSize,
        height:ImageSize,
        borderRadius:3,
        alignSelf:'flex-end'
    },
    card:{
        marginHorizontal:'1%',
        marginVertical:'1.5%',
        backgroundColor: '#f5f5f5', // {bgColor !== null ? bgColor : '#f5f5f5'}
    },
    title:{
        fontSize:20,
        textAlign:'center',
    },
    subtitle:{
        fontSize:10,
        textAlign:'center'
    },
    cardView:{
        flex:1, 
        flexDirection: 'column', 
        alignSelf:'center'
    }

})

export default RoomCard