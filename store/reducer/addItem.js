import {CREATE_ITEM, DELETE_ITEM, UPDATE_ITEM} from '../action/addItem';

const initialState={
    items:[]
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_ITEM:
            return{
                items:[
                    ...state.items,
                    {id:action.pid,title:action.title,price:action.price,date:action.date}
                ]
            };
        case UPDATE_ITEM:
            const updatedItems = state.items.map(item=>{
                if(item.id === action.pid){
                    item.id = action.pid
                    item.title = action.title;
                    item.price = action.price;
                    item.date = action.date;
                }
                return item;
            });
            return {
                items:updatedItems
            }

        case DELETE_ITEM:
            return{
                ...state.items,
                items:state.items.filter(item => item.id !== action.pid)
            }
    }
    return state;
}