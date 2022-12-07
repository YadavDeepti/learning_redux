const CAKE_ORDERED = "CAKE_ORDERED"

//ACTION CREATOR
function orderCake(){
    //action
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}