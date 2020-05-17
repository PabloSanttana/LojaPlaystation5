import React,{useState} from 'react'
import {Text,View,ImageBackground, TouchableOpacity, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconn from 'react-native-vector-icons/Octicons'
import Gamer from 'react-native-vector-icons/Ionicons'


import styles from './styles'
import NavBarFooter from '../../components/NavBarFooter'
import suwitDark from '../../assets/suwitDark.png'
import suwitLit from '../../assets/suwitLit.png'
import Carrosel from '../../components/Carrosel'

console.disableYellowBox = true

export default function Home(){
    const [colorActive, setColorActive] = useState([1,0,0])

    function handleActiveProduct(num){
        let active = [0,0,0]
        active[num] = 1
        setColorActive(active)
    }


    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
                <View style={styles.blue}/>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.button}>
                        <Icon name='menu' size={20} color='#778492'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name='cart-outline' size={20} color='#778492'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titlePrimary}>Featured</Text>
                    <Text style={styles.titleSecundary}>Products</Text>
                </View>
                <View style={styles.navProduct}>
                    <View style={{width:50,height:40,justifyContent:'center',alignItems:'center'}}>
                        <Iconn name='settings' size={25} color='#616e7a'/>
                    </View>
                    <TouchableOpacity onPress={() => handleActiveProduct(0) } style={[styles.navButton,{ backgroundColor: colorActive[0] === 1? '#343740': '#fff' }]}>
                        <Gamer name='logo-game-controller-b' size={30} color={colorActive[0] === 1? '#fff': '#000'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleActiveProduct(1) } style={[styles.navButton,{ backgroundColor: colorActive[1] === 1? '#343740': '#fff' }]}>
                        <Image style={styles.suwit} resizeMode='contain' source={ colorActive[1] === 1?suwitLit:suwitDark}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleActiveProduct(2) } style={[styles.navButton,{ backgroundColor: colorActive[2] === 1? '#343740': '#fff' }]}>
                        <Icon name='mouse' size={25} color={colorActive[2] === 1? '#fff': '#000'}/>
                    </TouchableOpacity>
                </View>
               
               <Carrosel />
             
            </View>
            
            <NavBarFooter rota='Home'/>
        </View>
    )
}
