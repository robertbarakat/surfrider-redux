export const nbrLois = (state = 0, action) => {
    switch(action.type){
        case 'ADD_LOI': return state + 1;
        default: return state
    }
}

export const coutLoi = (state = 3000, action) => {
    switch(action.type){
        case 'ADD_LOI': return Math.ceil(state * 1.15);
        default: return state
    }
}