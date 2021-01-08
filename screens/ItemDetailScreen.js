import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import * as itemActions from '../store/action/addItem';

const ItemDetailScreen = (props) =>{
    const {id,Stitle,Sprice,date} = props.route.params;

    const [datee, setDatee] = useState(date?date:new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [title,setTitle] = useState(Stitle? Stitle:'');
    const [price,setPrice] = useState(Sprice? Sprice:'');
    
    const dispatch = useDispatch();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || datee;
        setShow(Platform.OS === 'ios');
        setDatee(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <TextInput placeholder='Title'
                        style={styles.input}
                        value={title}
                        onChangeText={(title)=>setTitle(title)}
                    />
                    <View style={styles.inputDate}>
                        <Text testID="dateTimeText" style={{ color: "#000", fontSize: 12 }}
                        >
                           { moment(datee).format('L')}
                        </Text>
                        <TouchableOpacity
                            testID="startdatePickerButton"
                            onPress={()=>showDatepicker()}
                            >
                            <Icon name='date-range' size={23} color="#368276" style={{marginRight:10}}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder='Price'
                        style={styles.input}
                        value={price}
                        onChangeText={(price)=>setPrice(price)}
                    />
                </View>
                    {
                        id?
                        <TouchableOpacity style={styles.btnUp} onPress={()=>{
                            dispatch(itemActions.updateItem(id,title,price,datee))
                            props.navigation.goBack()
                            }}>
                            <Text style={{color:'#fff'}}>Update</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.btnAdd} onPress={()=>{
                            let id = uuidv4()
                            dispatch(itemActions.createItem(id,title,price,datee))
                            props.navigation.goBack()
                            }}>
                            <Text style={{color:'#fff'}}>Create</Text>
                        </TouchableOpacity>
                    }
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={datee}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                     )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    content:{
        width:wp(90),
        alignItems:'center'
    },
    input:{
        width:wp(90),
        height:hp(7),
        marginTop:hp(2),
        borderBottomWidth:0.5
    },
    inputDate:{
        width:wp(90),
        height:hp(7),
        marginTop:hp(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:0.5
    },
    date:{
        width:wp(90),
        height:hp(7),
        marginTop:hp(2),
        borderBottomWidth:0.5
    },
    btnAdd:{
        width:wp(60),
        height:hp(6),
        backgroundColor:'#ff8800',
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation:5,
        borderRadius:hp(3),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(8)
    },
    btnUp:{
        width:wp(60),
        height:hp(6),
        backgroundColor:'red',
        shadowOffset:{width:0,height:10},
        shadowColor:'#000',
        elevation:5,
        borderRadius:hp(3),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(8)
    }
})

export default ItemDetailScreen;
