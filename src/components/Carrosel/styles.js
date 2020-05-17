import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        width,
        height: height * 0.4,
        paddingRight:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    Carousel:{
        flex:1,
        overflow:'visible'
    },
    cardBackground:{
        width: width * 0.5,
        height:270,
        justifyContent:'center',
        alignItems:'center'
    },
    carouselImage:{
        width: width * 0.33,
    },
    cardTitle:{
        position:'absolute',
        left:30,
        top:180,
        fontWeight:'bold',
        fontSize:20,
       
    },
    cardDescription:{
        position:'absolute',
        left:30,
        top:205,
        fontSize:15,
        color: 'gray'
       
    },
    buttonAdd:{
        position:'absolute',
        bottom:10,
        right:20,
        backgroundColor:'#fff',
        borderRadius:100,
        padding:0,
        width:27,
        height:27,
        alignItems:'center',
        justifyContent:'center',
        elevation:2,
    }
})