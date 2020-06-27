import React from 'react'
import { Card, IconButton } from 'react-native-paper'
import im from '../util/img/Fondo12.jpg'
import { View, PointPropType, StyleSheet, Text } from 'react-native'

let UtilHeader = (props) =>{
    return(
        <View style={Styles.card} >
                <View style={{marginHorizontal:'4%', marginVertical: '1%', alignSelf:'center'}} >
                    <Text style={Styles.text} >
                        {props.title}
                    </Text>
                </View>
                <View style={Styles.icon} >
                    <IconButton
                        //style={Styles.icon}
                        icon={props.iconName}
                        color={props.iconColor}
                        onPress={ () => props.iconPress() }
                        size={35}
                    />
                </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:3,
    },
    card:{
        backgroundColor:'#f5f5f5',
        flex:0.6,
        flexDirection:'row',
        width:'100%',
        height:'1%'
    },
    viewCard:{
        flex:1
    },
    text:{
        fontSize:25,
    },
    icon:{
        marginHorizontal:'1%',
        flex:1,
        alignItems:'flex-end'
    }

})

export default UtilHeader