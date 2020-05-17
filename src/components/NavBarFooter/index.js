import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA from 'react-native-vector-icons/FontAwesome'

import styles from './styles'


export default function NavBarFooter({ rota, price = 0 }) {
    return (
        <View style={styles.container}>
            {price === 0 ?
            <>
                <TouchableOpacity style={[styles.button, rota === 'Home' ? { backgroundColor: '#2a6ff4', elevation: 4, padding: 6, paddingHorizontal:8, } : null]}>
                    <IconMCI name='home-outline' size={30} color={rota === 'Home' ? '#fff' : '#4e5965'} />
                    {rota === 'Home' ? <Text style={styles.title}>Home</Text> : null}
                </TouchableOpacity  >
                <TouchableOpacity style={styles.button} >
                    <IconFA name='user' size={30} color='#4e5965' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <IconMCI name='settings' size={30} color='#4e5965' />
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, marginRight: 0 }} >
                    <IconMCI name='bookmark' size={30} color='#4e5965' />
                </TouchableOpacity>
            </>
            :
            <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.textPrice}>$ {price}</Text>
                <TouchableOpacity style={styles.buttonPrice}>
                    <Text style={styles.text}>Preorder</Text> 
                    <IconMCI name='arrow-right' size={30} color='#fff'/>
                </TouchableOpacity>
            </View>
            }

        </View>
    )
}

NavBarFooter
