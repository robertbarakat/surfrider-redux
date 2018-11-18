export const nbrBenevoles = (state = 0, action) => {
    switch(action.type){
        case 'ADD_BENEVOLE': return state + 1;
        default: return state
    }
}

export const coutBenevole = (state = 20, action) => {
    switch(action.type){
        case 'ADD_BENEVOLE': return Math.ceil(state * 1.1);
        default: return state
    }
}