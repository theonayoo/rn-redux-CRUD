import React,{useState} from 'react'
import { View, Text , StyleSheet,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector,useDispatch} from 'react-redux';

import History from '../components/hisotry'

const HistoryScreen = (props)=> {

    const hisotry = useSelector(state=>state.history.hisotry)
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={hisotry}
                keyExtractor={(item,index)=>index.toString}
                renderItem={({item})=>{
                    <History 
                        title={item.title}
                        date={item.date}
                        price={item.price}
                        update={item.update}
                        delete={item.delete}
                    />
                }}
            />
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

export default HistoryScreen;
