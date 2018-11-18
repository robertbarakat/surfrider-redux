import { dechetsOcean, dechetsJetes, dechetsRamasses, priseConscience, ptsConscienceSec} from './initialState';
import { nbrBenevoles, coutBenevole} from './benevoleReducer';
import { nbrInitiatives, coutInitiative} from './initiativeReducer';
import { nbrRecyclages, coutRecyclage} from './recyclageReducer';
import { nbrLois, coutLoi} from './loiReducer';
import { nbrActionsCitoyennes, coutActionCitoyenne} from './actionCitoyenneReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    dechetsOcean,
    dechetsJetes,
    dechetsRamasses,
    priseConscience,
    ptsConscienceSec,
    nbrBenevoles,
    coutBenevole,
    nbrInitiatives,
    coutInitiative,
    nbrRecyclages, 
    coutRecyclage,
    nbrLois, 
    coutLoi,
    nbrActionsCitoyennes, 
    coutActionCitoyenne
})

export default allReducers;