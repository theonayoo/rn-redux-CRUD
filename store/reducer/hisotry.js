import { SET_HISTORY } from '../action/history';

const initialState = {
    history:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return{
        items:[
            ...state.history,
            {id:action.pid,title:action.title,price:action.price,date:action.date}
        ]
    };
  }

  return state;
}