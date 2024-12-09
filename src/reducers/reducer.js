import { DO_ACTION_1, DO_ACTION_2 } from '../actions/actions'

const reducer = (state, action) => {
    switch (action.type) {
        case DO_ACTION_1:
            return {...state};
        case DO_ACTION_2:
            return {...state};
        default:
            throw new Error(`No matching "${action.type}" action type`)
    }
}

export default reducer;
