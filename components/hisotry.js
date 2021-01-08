import React from 'react'
import { View, Text , StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const History = (props)=> {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.font}>{props.title}</Text>
                <Text style={styles.font}>{props.date}</Text>
                <Text style={styles.font}>{props.price}</Text>
                <Text style={styles.font}>{props.update}</Text>
                <Text style={styles.font}>{props.delete}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        height:hp(15),
        width: wp(95),
        justifyContent:'space-evenly',
        alignSelf:'center',
        borderBottomWidth:0.5
    },
    font:{
        color:'#000',
        fontSize: 15,
        marginVertical: 2
    }
})

export default History;
