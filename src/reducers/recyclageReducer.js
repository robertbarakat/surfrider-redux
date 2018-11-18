export const nbrRecyclages = (state = 0, action) => {
    switch(action.type){
        case 'ADD_RECYCLAGE': return state + 1;
        default: return state
    }
}

export const coutRecyclage = (state = 1000, action) => {
    switch(action.type){
        case 'ADD_RECYCLAGE': return Math.ceil(state * 1.15);
        default: return state
    }
}