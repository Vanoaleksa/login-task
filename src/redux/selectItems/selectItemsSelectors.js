import {createSelector} from 'reselect';


export const selectedSelector = createSelector (
    [state => state.selectItems.selectItems],
    selectItems => selectItems

)