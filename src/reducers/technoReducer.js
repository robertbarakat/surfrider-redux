export const nbrTechnologies = (state = 0, action) => {
    switch(action.type){
        case 'ADD_TECHNOLOGIE': return state + 1;
        default: return state
    }
}

export const coutTechnologie = (state = 15000, action) => {
    switch(action.type){
        case 'ADD_TECHNOLOGIE': return Math.ceil(state * 1.3);
        default: return state
    }
}