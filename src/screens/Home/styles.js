import {StyleSheet, Dimensions} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#e7f0f8',
        paddingBottom: 20,
    },
    blue: {
        width: width*0.5,
        height: height - 200,
        borderBottomLeftRadius:20,
        backgroundColor:'#2a6ff4',
        marginLeft: width*0.5,
        position:'absolute',
    },
    header:{
        width,
        marginTop: 10 + getStatusBarHeight(false),
        flexDirection:'row',
        paddingHorizontal: 20,
        justifyContent:'space-between'
    },
    button: {
        width:40,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:20,
        elevation: 5,
    },
    titleContainer:{
        marginTop:10,
        marginLeft:25,
    },
    titlePrimary:{
        fontSize:35,
        fontWeight:'bold',
        fontFamily: 'sans-serif-light',
        marginBottom:0
    },
    titleSecundary:{
        fontSize:40,
        fontFamily: 'sans-serif-light',
        marginTop:-13,
    },
    navProduct:{
        width,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingRight:100,
      
    },
    navButton:{
        width:50,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        borderRadius:10,
        elevation:5,
    },
    suwit:{
        width:40,
        height:30,
    }
})