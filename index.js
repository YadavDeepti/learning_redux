const redux = require('redux')
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED"

//ACTION CREATOR
function orderCake(){
    //action
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const initialState ={
    noOfCakes: 10,
}

//REDUCER
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case CAKE_ORDERED:
           return {
            ...state,
            noOfCakes : state.noOfCakes - 1,
           }
    
        default:
            break;
    }
}

//CREATE STORE
const store = createStore(reducer)
console.log('Initial State', store.getState() )

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();