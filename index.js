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
    noOfCakes: 10
}

//REDUCER
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case CAKE_ORDERED:
           return {
            ...state,
            noOfCakes : state.noOfCakes - 1
           }
    
        default:
            break;
    }
}