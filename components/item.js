import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const item = (props)=> {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center'}}
                    onPress={props.onDetails}
                >
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.desc}>
                        <Text>{props.date}</Text>
                        <Text>${props.price}</Text>
                    </View>
                    <View style={[styles.desc,{marginTop:hp(4)}]}>
                        <TouchableOpacity style={styles.btnUpdate} onPress={props.onDetails}>
                            <Text style={{color:'#fff'}}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete} onPress={props.onDelete}>
                            <Text style={{color:'#fff'}}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    btnDelete:{
        paddingHorizontal:hp(3),
        backgroundColor:'red',
        paddingVertical:hp(1),
        borderRadius:hp(1)
    },
    btnUpdate:{
        paddingHorizontal:hp(3),
        backgroundColor:'#ff8800',
        paddingVertical:hp(1),
        borderRadius:hp(1)
    },
    item:{
        width:wp(80),
        height:hp(20),
        backgroundColor:'#fff',
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation:5,
        borderRadius:hp(1),
        justifyContent:'center',
        paddingHorizontal:hp(5),
        marginTop:hp(2)
        // elevation:5
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    desc:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
    }
})

export default item;
