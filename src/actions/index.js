export const modify = (num) => (
    {
        type: 'MODIFY',
        num
    }
);

export const reset = () => (
    {
        type: 'RESET'
    }
);

export const pointsConscience = (num) => (
    {
        type: 'PRISE_CONSCIENCE',
        num
    }
);

export const addBenevole = (num) => (
    {
        type: 'ADD_BENEVOLE',
        num
    }
);

export const addInitiative = (num) => (
    {
        type: 'ADD_INITIATIVE',
        num
    }
);

export const addRecyclage = (num) => (
    {
        type: 'ADD_RECYCLAGE',
        num
    }
);

export const addLoi = (num) => (
    {
        type: 'ADD_LOI',
        num
    }
);

export const addActionCitoyenne = (num) => (
    {
        type: 'ADD_ACTION_CITOYENNE',
        num
    }
);
