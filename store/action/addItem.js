export const DELETE_ITEM = 'DELETE_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const deleteItems = Id =>{
    return{type: DELETE_ITEM, pid: Id}
}

export const createItem = (id,title,price,date)=>{
    return{
    type:CREATE_ITEM,
        pid:id,
        title:title,
        price:price,
        date:date
    }
}

export const updateItem =  (id,title,price,date)=>{
    return{type:UPDATE_ITEM,
        pid:id,
        title:title,
        price:price,
        date:date
    }
}
