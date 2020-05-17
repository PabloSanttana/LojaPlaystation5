import { StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        alignSelf:'center',
        padding:15,
        borderRadius:15,
        elevation:5,
        flexDirection:'row',
        marginVertical:20,
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:20,
        borderRadius: 10,
    },
    title:{
        marginLeft:10,
        color:'#fff',
        fontWeight:'bold',
        fontSize:17,
    },
    buttonPrice:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2a6ff4',
        marginLeft:30,
        marginRight:5,
        padding:5,
        borderRadius:10,
        elevation:5,
    },
    text:{
        color:'#fff',
        marginHorizontal:10,
        fontSize:20,
    },
    textPrice:{
        color:'#2a6ff4',
        fontSize:30,
        fontWeight:'bold'
    }
})