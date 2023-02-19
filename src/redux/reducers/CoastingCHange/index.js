// **  Initial State

const initialState = {
    CoastingChange : 0
}
const CoastingChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_COASTING_TOTAL_CHANGE':
            return {
                ...state,
                CoastingChange: action.data
            }

        case 'ON_DELETE_CALCULATION':
            let cal = []
            cal = state.upvcAllCalculations
            cal = cal.slice(0, action.data).concat(cal.slice(-action.data))

            return { ...state, upvcAllCalculations: cal }
        default:
            return state
    }
}
export default CoastingChangeReducer