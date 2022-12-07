const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

//ACTION CREATOR
function orderCake(){
    //action
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function cakeRestocked(qty=1){
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
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
        case CAKE_RESTOCKED:
            return {
                ...state,
                noOfCakes: state.noOfCakes + action.payload,
            }
        default:
            break;
    }
}

//CREATE STORE
const store = createStore(reducer)
console.log('Initial State', store.getState() )

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(cakeRestocked(3));

const actions = bindActionCreators({ orderCake, cakeRestocked}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.cakeRestocked(3)

unsubscribe();