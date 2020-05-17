import {StyleSheet, Dimensions} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'

const {width, height} =Dimensions.get('window')

export default StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor: '#e7f0f8',
        paddingBottom: 30,
    },
    header:{
        height: height * 0.45,
        backgroundColor:'#2a6ff4',
        paddingTop: 10 + getStatusBarHeight(false),
        paddingHorizontal: 20,
      
    },
    navHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
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
    headerIfon:{
        marginVertical:10
    },
    titleHeader:{
       color:'#fff',
       fontSize:17,
       fontWeight:'bold',
       fontFamily:'monospace'
    },
    textHeader:{
        color:'#fff',
        marginTop:5,
    },
    imgController:{
        width: width *  0.75,
        height:height * 0.25,
        position:'absolute',
        bottom:0,
        right:-20,
        transform: [{ rotate: '270deg' }],
        elevation:10,
        zIndex:5,
        
    },
    book:{
        backgroundColor:'#343740',
        position: 'absolute',
        bottom:-20,
        left:40,
        elevation:8,
    },
    Description:{
        flex:1.1,
        marginHorizontal:20,
    },
    title:{
        marginTop: height *0.07,
        fontSize:30,
        fontWeight:'bold',
    },
    detailController:{
        marginTop:10,
        width:'85%',
        fontSize:16,

    },
    iconDetail:{

        marginVertical:20,
    },
    iconContent:{
        flexDirection:'row',
        justifyContent:'space-between',
      
    },
    IconContainer:{
        flexDirection:'row',
        alignItems:'center',
      
    },
    iconButton:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:15,
        elevation:10,
        marginRight:15,
    },
    iconTitle:{
        fontWeight:'bold',
        fontSize:16,
    }


})