import React,{useState,useRef} from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Carousel from 'react-native-anchor-carousel'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import Data from '../../constants/data'
const {width} = Dimensions.get('window')

export default function Carrosel(){
    const navigation = useNavigation()
    const [data, setData] = useState(Data)
    const carouselRef = useRef(null)

    function navigateToDetail(item){
        navigation.navigate('Detail',{ item })
    }


    const renderItem = ({item,index}) => (
        <View key={index}>
            <TouchableOpacity onPress={()=> {carouselRef.current.scrollToIndex(index)}}>
                <ImageBackground resizeMode='contain' style={styles.cardBackground} source={require('../../assets/back.png')}>
                    <Image source={item.image} resizeMode='contain' style={styles.carouselImage}/>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>{item.discription}</Text>
                    <TouchableOpacity onPress={() => navigateToDetail(item)} style={styles.buttonAdd}>
                        <Icon name='ios-add-circle'size={30} color='#2a6ff4' />
                    </TouchableOpacity>
                    
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )


    return (
        <View style={styles.container}>
              <Carousel style={styles.Carousel}
                                data={data}
                                renderItem={renderItem}
                                itemWidth={230}
                                containerWidth={width - 20} 
                                separatorWidth={-20}
                                ref={carouselRef}
                                inActiveOpacity={0.6}
                            />
        </View>
    )
}


