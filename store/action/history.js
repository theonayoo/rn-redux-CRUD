export const SET_HISTORY = 'DELETE_ITEM';

export const historyItem = (id,title,price,date)=>{
    return{
    type:SET_HISTORY,
        pid:id,
        title:title,
        price:price,
        date:date
    }
}