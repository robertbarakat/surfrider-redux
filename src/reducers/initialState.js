export const dechetsOcean = (state = 0, action) => {
    switch(action.type){
        case 'MODIFY': return state + action.num;
        default: return state
    }
}

export const dechetsJetes = (state = 206000, action) => {
    switch(action.type){
        case 'ADD_RECYCLAGE': return state - 1000;
        case 'ADD_LOI': return state - 3000;
        case 'ADD_ACTION_CITOYENNE': return state - 10000;
        default: return state
    }
}

export const dechetsRamasses = (state = 0, action) => {
    switch(action.type){
        case 'GATHER_LITTER': return state + action.num;
        case 'ADD_BENEVOLE': return state + 5;
        case 'ADD_INITIATIVE': return state + 25;
        default: return state
    }
}

export const priseConscience = (state = 0, action) => {
    switch(action.type){
        case 'PRISE_CONSCIENCE': return state + action.num;
        case 'ADD_BENEVOLE': return state - action.num;
        case 'ADD_INITIATIVE': return state - action.num;
        case 'ADD_RECYCLAGE': return state - action.num;
        case 'ADD_LOI': return state - action.num;
        case 'ADD_ACTION_CITOYENNE': return state - action.num;
        default: return state
    }
}

export const ptsConscienceSec = (state = 0, action) => {
    switch(action.type){
        case 'PTS_CONSCIENCE': return state + action.num;
        case 'ADD_BENEVOLE': return state + 1;
        case 'ADD_INITIATIVE': return state + 3;
        case 'ADD_RECYCLAGE': return state + 5;
        case 'ADD_LOI': return state + 10;
        case 'ADD_ACTION_CITOYENNE': return state + 25;
        default: return state
    }
}