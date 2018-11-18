export const nbrInitiatives = (state = 0, action) => {
    switch(action.type){
        case 'ADD_INITIATIVE': return state + 1;
        default: return state
    }
}

export const coutInitiative = (state = 100, action) => {
    switch(action.type){
        case 'ADD_INITIATIVE': return Math.ceil(state * 1.1);
        default: return state
    }
}