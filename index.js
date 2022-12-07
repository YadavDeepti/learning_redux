const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

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

function orderIcecreame(qty=1){
    //action
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function icecreamRestocked(qty=1){
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}
// const initialState ={
//     noOfCakes: 10,
//     noOfIcecreams: 20,
// }

const initialCakeState = {
    noOfCakes: 10,
}

const initialIcecreamState = {
    noOfCakes: 20,
}

//REDUCER
const cakeReducer = (state = initialCakeState, action) =>{
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

const icecreamReducer = (state = initialIcecreamState, action) =>{
    switch (action.type) {
            case ICECREAM_ORDERED:
                return {
                 ...state,
                 noOfIcecream : state.noOfIcecreams - action.payload,
                }
             case ICECREAM_RESTOCKED:
                 return {
                     ...state,
                     noOfIcecreams: state.noOfIcecreams + action.payload,
                 }
        default:
            break;
    }
}


//COMBINE REDUCERS
const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
})

//CREATE STORE
const store = createStore(rootReducers)
console.log('Initial State', store.getState() )

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(cakeRestocked(3));

const actions = bindActionCreators({ orderCake, cakeRestocked, orderIcecreame, icecreamRestocked}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.cakeRestocked(3)
actions.orderIcecreame(2)
actions.icecreamRestocked(2)

unsubscribe();