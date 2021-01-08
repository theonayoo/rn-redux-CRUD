import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity ,FlatList} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import moment from 'moment';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import Item from '../components/item';
import * as itemActions from '../store/action/addItem';

const DashboardScreen =(props)=> {
    
    const dispatch = useDispatch();

    const items = useSelector(state=>state.item.items);

    const selectedItemHandler = (id,title,price,date)=>{
        props.navigation.navigate('Details',{
            id:id,
            Stitle:title,
            Sprice:price,
            date:date,
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={()=>{
                props.navigation.navigate('Details',{
                    id:null,
                    Stitle:null,
                    Sprice:null,
                    date:null
                });
            }}>
                <Icon name='add' size={25} color="#fff"/>
                <Text style={{fontWeight:'bold',color:'#fff'}}>Add Item</Text>
            </TouchableOpacity>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={items}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>(
                    <Item 
                        title={item.title}
                        date={moment(item.date).format('MMMM Do YYYY')}
                        price={item.price}
                        onDetails={()=>{
                            selectedItemHandler(item.id,item.title,item.price,item.date)
                        }}
                        onDelete={()=>{
                            dispatch(itemActions.deleteItems(item.id))
                        }}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    item:{
        width:wp(70),
        height:hp(10),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff8800',
        borderRadius:hp(1),
        marginTop:hp(3)
    }
})

export default DashboardScreen;