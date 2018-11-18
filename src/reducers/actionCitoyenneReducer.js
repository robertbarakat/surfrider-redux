export const nbrActionsCitoyennes = (state = 0, action) => {
    switch(action.type){
        case 'ADD_ACTION_CITOYENNE': return state + 1;
        default: return state
    }
}

export const coutActionCitoyenne = (state = 10000, action) => {
    switch(action.type){
        case 'ADD_ACTION_CITOYENNE': return Math.ceil(state * 1.25);
        default: return state
    }
}