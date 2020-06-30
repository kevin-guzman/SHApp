import React,{Component} from 'react'
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
import { RNCamera } from 'react-native-camera';

/* let TakePhoto = (props) =>{
    return(
        <View>

        </View>
    )
} */

class TakePhoto extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUri:null,
            taked: 0
        }
    }
    render(){
        const { imageUri } = this.state;
        const { taked } = this.state;
        /* if (taked) {
            console.log('inside')
            console.log(imageUri)
            //return <ImageBackground width={20} source={{uri: imageUri}}/>;
            return <Image  style={{flex:1, alignItems: 'center'}} source= {{uri: imageUri}}  />;
        } */
        return(
            <View style={styles.container}>
                <RNCamera
                ref={(ref) => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permiso para usar la cámara',
                    message: 'Acepta para añadir una imagen a tu habitación',
                    buttonPositive: 'Listo',
                    buttonNegative: 'Cancelar',
                }}
                /* androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }} */
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> Tomar </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            this.setState({ imageUri: data.uri, taked:1 })
            this.props.navigation.navigate('Add', {photo: data.uri} )
            //console.log(data.uri);
            //console.log(data)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

export default TakePhoto