import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'
import NavBarFooter from '../../components/NavBarFooter'

export default function Deatial(){
    const {item} = useRoute().params
    const navigation = useNavigation()
    return (
        <ScrollView>
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <View style={styles.navHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                            <Icon name='arrow-left' size={20} color='#778492'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name='cart-outline' size={20} color='#778492'/>
                    </TouchableOpacity>
                 </View>
               <View style={styles.headerIfon}>
                   <Text style={styles.titleHeader}>PLATAFORM</Text>
                   <Text style={styles.textHeader}>PS5</Text>
               </View>
               <View style={styles.headerIfon}>
                   <Text style={styles.titleHeader}>RELEASE</Text>
                   <Text style={styles.textHeader}>Fall 2020</Text>
               </View>
               <View style={styles.headerIfon}>
                   <Text style={styles.titleHeader}>Price</Text>
                    <Text style={styles.textHeader}>$ {item.price}</Text>
               </View>
               <Image resizeMode='contain' style={styles.imgController} source={item.image} />
               <TouchableOpacity style={[styles.button, styles.book]}>
                   <Icon name='bookmark-outline' size={25} color='#fff' />
               </TouchableOpacity>
            </View>
            <View style={styles.Description}>
                 <Text style={styles.title}>{item.title}</Text>
                 <Text style={styles.detailController}>{item.detail}</Text>
                 <View style={styles.iconDetail}>
                     <View style={styles.iconContent}>
                         <View style={styles.IconContainer}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Ionicons name='logo-game-controller-b' size={30} color='#0390bf' />
                            </TouchableOpacity>
                            <View>
                            <Text style={styles.iconTitle}>Futuristic</Text>
                            <Text>Design</Text>
                            </View>
                            
                         </View>
                        <View style={styles.IconContainer}>
                            <TouchableOpacity style={styles.iconButton}>
                                    <Ionicons name='md-microphone' size={30} color='#3461cb' />
                            </TouchableOpacity>
                            <View style={{paddingRight:15}}>
                                <Text style={styles.iconTitle}>Bulilt-in</Text>
                                <Text>Microphone</Text>
                            </View>
                        </View>
                     </View>
                     <View style={{...styles.iconContent,marginTop:20}}>
                         <View style={styles.IconContainer}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Icon name='gamepad' color='#b800ff' size={30} />
                            </TouchableOpacity>
                            <View >
                            <Text style={styles.iconTitle}>Haptic</Text>
                            <Text>Feedback</Text>
                            </View>
                           
                         </View>
                        <View style={styles.IconContainer}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Ionicons name='ios-flash' size={30} color='#6236b2' />
                            </TouchableOpacity>
                            <View>
                            <Text style={styles.iconTitle}>Fast Chatge</Text>
                            <Text>USB-C port</Text>
                            </View>
                           
                        </View>
                     
                     </View>
                    
                 </View>
            </View>
            <NavBarFooter price={item.price} />
        </View>
        </ScrollView>
    )
}

 
